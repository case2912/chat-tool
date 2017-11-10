import IMessage from "./IMessage";
export default interface AppState {
    socket: SocketIOClient.Socket;
    userid: string;
    rooms: {
        [key: string]: { messages: IMessage[], roomName: string },
    };
}
