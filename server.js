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


var vfs = vfsLocal({root: "/home/tim/Code/" });
require('vfs-http-transport/server')(vfs, server, "/vfs");