function generateTimestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

function generateUuid() {
    // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
    // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    const chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case "x":
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case "y":
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
            default:
                // tslint:disable-next-line:switch-final-break
                break;
        }
    }
    return chars.join("");
}

let server = require("http").createServer();
let io = require("socket.io")(server);
const rooms = {}
io.on("connection", function (client) {
    client.on("selectRoom", roomid => {
        client.join(roomid)
        console.log(roomid)
        rooms[roomid] = roomid;
        console.log(rooms)
    })
    client.on("addText", function (data) {
        console.log(data)
        client.broadcast.to(rooms[data.roomid]).emit("sendText", data);
    });
    client.on("disconnect", function () {
        client.broadcast.to("a").emit("sendText", {
            timestamp: generateTimestamp(),
            uuid: generateUuid(),
            message: "a user is disconnected",
            userid: client.id,
        });

    });
});
server.listen(3000);