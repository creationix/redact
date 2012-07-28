require(["vfs-socket/consumer", "ace", "tty"], function (consumer, ace, tty) {
  var BrowserTransport = consumer.smith.BrowserTransport;
  var Consumer = consumer.Consumer;
  var Terminal = tty.Terminal;

  var consumer = new Consumer();

  var url = document.location.href.replace(/^http/, "ws");
  var ws = new WebSocket(url);
  ws.onopen = function () {

    consumer.connect(new BrowserTransport(ws, true), function (err, server) {
      if (err) throw err;
      window.server = server;
      server.readdir("/", {}, function (err, meta) {
        meta.stream.on("data", function (stat) {
          var row = document.createElement("p");
          row.textContent = JSON.stringify(stat);
          document.getElementById("files").appendChild(row);
        });
      });
      ace.edit(document.getElementById("editor"));
      var terminal = new Terminal(80, 24, function (chunk) {
        console.log("->", chunk);
      });
      terminal.open(document.getElementById("terminal"));
    });
  };
});