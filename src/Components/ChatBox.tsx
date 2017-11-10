import * as React from "react";
import AppState from "./../AppState";
import { ActionDispatcher } from "./../Container";
import IMessage from "./../IMessage";
import { generateTimestamp, generateUuid } from "./../Util";
export default class ChatBox extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {
                    this.props.item.map((v: IMessage) => {
                        return <p key={v.uuid}>{v.timestamp}:{v.message}</p>;
                    })
                }
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
