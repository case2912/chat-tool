import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as Action from "./Action";
import App from "./Components/App";
import IMessage from "./IMessage";
import { ReduxAction, ReduxState } from "./store";

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) { }

    public addText(message: IMessage) {
        this.dispatch(Action.addText(message));
    }
    public recieveText(message: IMessage) {
        this.dispatch(Action.recieveText(message));
    }
    public createRoom(value: string) {
        this.dispatch(Action.createRoom(value));
    }
    public joinRoom(value: string) {
        this.dispatch(Action.joinRoom(value));
    }
}

export default connect(
    (state: ReduxState) => ({ value: state.reducer }),
    (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) }),
)(App);
