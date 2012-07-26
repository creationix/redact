var http = require('http');
var stack = require('stack');
var creationix = require('creationix');
var vfsLocal = require('vfs-local');
var vfsComposite = require('vfs-composite');
var vfsHttpAdapter = require('vfs-http-adapter');
var urlParse = require('url').parse;

var PORT = process.env.PORT || 8080;

var server = http.createServer(stack(
  creationix.log(),
  vfsHttpAdapter("/", vfsComposite({ 
      root: "/",
      vfs: vfsLocal({root: "/"}),
      prefix: __dirname + "/public/"
  }),
  {
    readOnly: true,
    autoIndex: "index.html"
  })
));

server.listen(PORT, function () {
  console.log("http://localhost:%s/", PORT);
});

var smith = require('smith');
var WebSocketServer = require('ws').Server;

var api = {
  add: function (a, b, callback) {
    callback(null, a + b);
  }
};

var wss = new WebSocketServer({server: server});
wss.on('connection', function(ws) {
  var agent = new smith.Agent(api);
  agent.connect(new smith.WebSocketTransport(ws), function (err, client) {
    if (err) throw err;
    console.log("client", client);
  });
});

