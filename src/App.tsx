import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as io from "socket.io-client";
import { ChatBox, Props } from "./ChatBox";
import Container from "./Container";
import { AppState, IMessage } from "./module";
import store from "./store";
import { generateTimestamp, generateUuid } from "./util";
const socket = io("http://localhost:3000");
export const initialState: AppState = { messages: [], socket, userid: null, menbers: [], roomid: null };

export class App extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props);
        initialState.roomid = location.search.match(/room=(.*?)(&|$)/)[1];
        socket.emit("selectRoom", this.props.value.roomid);
        socket.on("connect", () => {

            initialState.userid = socket.id;
            socket.on("sendText", (v: IMessage) => {
                this.props.actions.recieveText(v);
            });
        });

    }
    public render() {
        return (
            <div>
                <p>roomid:{this.props.value.roomid}</p>
                <p>userid:{this.props.value.userid}</p>
                <ChatBox {...this.props} />
            </div>
        );
    }
    private _init() {
        this.props.actions.addText({
            message: "a user is connected",
            uuid: generateUuid(),
            timestamp: generateTimestamp(),
            userid: this.props.value.userid,
            roomid: this.props.value.roomid,
        });
    }
}
