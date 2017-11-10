import * as React from "react";
import AppState from "./../AppState";
import { ActionDispatcher } from "./../Container";
export default class CreateRoom extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <input type="text" onKeyDown={e => this._onKeyDown(e)}></input>
            </div >
        );
    }
    private _onKeyDown(e: any) {
        if (e.keyCode === 13) {
            const target = e.currentTarget;
            if (target.value !== "") { this.props.actions.createRoom(target.value); }
            target.value = "";
        }
    }

}
