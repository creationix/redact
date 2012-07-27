require(["vfs-socket/consumer"], function (consumer) {
  var BrowserTransport = consumer.smith.BrowserTransport;
  var Consumer = consumer.Consumer;

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
          document.body.appendChild(row);
        });
      });
    });
  };
});