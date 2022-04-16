var express = require("express");
var app = new express();

var server = require("http").createServer(app);
var io = require("socket.io")(server);

server.listen(3000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});

var userId = 0;
// "connect" is pre-defined and gets fired immediately on client connection.
// Other events names are optional.
// this Event is gonna handle the client for the rest of the session.
io.on("connect", (client) => {
  client.emit("connected");
  var newNickname = "";

  client.on("join", (nickname) => {
    userId += 1;
    newNickname = nickname ? nickname : `User${userId}`;
    client.broadcast.emit("identified", newNickname);
    client.emit("identified", "You");
  });

  client.on("handleMessage", (message) => {
    client.broadcast.emit("broadcastMessage", newNickname, message);
    client.emit("broadcastMessage", "You", message);
  });

  client.on("disconnect", () => {
    io.emit("userLeft", newNickname);
  });
});
