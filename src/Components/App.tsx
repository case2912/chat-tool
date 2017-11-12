import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as io from "socket.io-client";
import styled from "styled-components";
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
const FlexBox = styled.div`
    display:flex;
    justify-content:center;
`;
const VerticalBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    height:100%;
    width:100%;
`;
const MainContainer = styled.div`
    flex:1;
    height:100%;
    width:100%;
`;
const Header = styled.div`
    height:50px;
    background-color:gray;
    width:100%;
`;

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
            <VerticalBox>
                <Header>
                    <FlexBox>
                        <div>
                            <p>CreateRoom</p>
                            <CreateRoom {...this.props} />
                        </div>
                        <div>
                            <p>JoinRoom</p>
                            <JoinRoom {...this.props} />
                        </div>
                    </FlexBox>
                </Header>
                <MainContainer>
                    <Rooms {...this.props} />
                </MainContainer>
            </VerticalBox>
        );
    }
}
