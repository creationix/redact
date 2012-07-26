require(["smith"], function (smith) {
  var Agent = smith.Agent;
  var BrowserTransport = smith.BrowserTransport;

  var agent = new Agent();

  var ws = new WebSocket("ws://localhost:8080/");
  ws.onopen = function () {
    agent.connect(new BrowserTransport(ws, true), function (err, server) {
      if (err) throw err;
      server.add(5, 7, function (err, result) {
        if (err) throw err;
        console.log("5 + 7 =", result);
      });
    });
  };

});