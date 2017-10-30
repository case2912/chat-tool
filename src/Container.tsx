import { connect } from "react-redux";
import { Dispatch } from "redux";
import { App } from "./App";
import { addTextAmount, IMessage, recieveTextAmount } from "./module";
import { ReduxAction, ReduxState } from "./store";

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) { }

    public addText(amount: IMessage) {
        this.dispatch(addTextAmount(amount));
    }
    public recieveText(amount: IMessage) {
        this.dispatch(recieveTextAmount(amount));
    }
}

export default connect(
    (state: ReduxState) => ({ value: state.reducer }),
    (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) }),
)(App);
