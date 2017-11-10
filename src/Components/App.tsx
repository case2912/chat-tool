import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as io from "socket.io-client";
import { joinRoom } from "../Action";
import AppState from "./../AppState";
import Container, { ActionDispatcher } from "./../Container";
import IMessage from "./../IMessage";
import store from "./../Store";
import * as Util from "./../Util";
import ChatBox from "./ChatBox";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import Rooms from "./Rooms";
const socket = io("http://localhost:3000");

export const initialState: AppState = {
    socket: null, userid: Util.generateUuid(),
    rooms: {},
};
interface Props {
    value: AppState;
    actions: ActionDispatcher;
}
export default class App extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props);
        socket.on("connect", () => {
            initialState.socket = socket;
            socket.on("sendText", (v: IMessage) => {
                this.props.actions.recieveText(v);
            });
        });
    }
    public render() {
        return (
            <div>
                <Rooms {...this.props} />
                <p>CreateRoom</p>
                <CreateRoom {...this.props} />
                <p>JoinRoom</p>
                <JoinRoom {...this.props} />
            </div>
        );
    }
}
