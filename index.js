let app = require("express")(); // express initializes app to be a function handler that you can supply to an HTTP server
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", function(req, res) {
  // define a route handler / that gets called when we hit our website home
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

http.listen(3000, function() {
  // make the http server listen on port 3000
  console.log("listening on *:3000");
});
