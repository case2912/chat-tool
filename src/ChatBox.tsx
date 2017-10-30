import * as React from "react";
import { ActionDispatcher } from "./Container";
import { AppState, IMessage } from "./module";
import { generateTimestamp, generateUuid } from "./util";

export interface Props {
    value: AppState;
    actions: ActionDispatcher;
}

export class ChatBox extends React.Component<Props, {}> {

    public render() {
        return (
            <div>
                <ul>
                    {this.props.value.messages.map((data) => {
                        return <li key={data.uuid}>{data.userid}:&nbsp;{data.timestamp}:&nbsp;{data.message}</li>;
                    })}
                </ul>
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
                roomid: this.props.value.roomid,
            };
            this.props.actions.addText(message);
            target.value = "";
        }

    }

}
