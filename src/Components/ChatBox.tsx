import * as React from "react";
import styled from "styled-components";
import AppState from "./../AppState";
import { ActionDispatcher } from "./../Container";
import IMessage from "./../IMessage";
import { generateTimestamp, generateUuid } from "./../Util";
const Box = styled.div`
    overflow:auto;
    max-height:300px;
`;
const Text = styled.p`
`;
const Timestamp = styled.p`
    font-size:9px;
    color:gray;
`;
export default class ChatBox extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Box>
                    {
                        this.props.item.map((v: IMessage) => {
                            return (
                                <div key={v.uuid}>
                                    <Timestamp >{v.timestamp}</Timestamp>
                                    <Text >{v.message}</Text>
                                </div>
                            );
                        })
                    }
                </Box>
                <input type="text" onKeyDown={e => this._onKeyDown(e)}></input>
            </div >
        );
    }
    private _onKeyDown(e: any) {
        if (e.keyCode === 13) {
            const target = e.currentTarget;
            const message: IMessage = {
                message: target.value,
                timestamp: generateTimestamp(),
                uuid: generateUuid(),
                userid: this.props.value.userid,
                roomid: this.props.roomid,
            };
            this.props.actions.addText(message);
            target.value = "";
        }

    }

}
