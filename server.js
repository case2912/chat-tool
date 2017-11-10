let server = require("http").createServer();
let io = require("socket.io")(server);
io.on("connection", function (client) {
    client.on("selectRoom", id => {
        client.join(id)
    })
    client.on("sendText", function (data) {
        client.broadcast.to(data.roomid).emit("sendText", data);
    });
});
server.listen(3000);