// ActionCreator
import { Action } from "redux";
import { initialState } from "./App";
enum ActionNames {
    ADDTEXT = "addText",
    RECIEVETEXT = "recieveText",
}

interface AddTextAction extends Action {
    type: ActionNames.ADDTEXT;
    value: IMessage;
}
interface RecieveTextAction extends Action {
    type: ActionNames.RECIEVETEXT;
    value: IMessage;
}
export const addTextAmount = (message: IMessage): AddTextAction => ({
    type: ActionNames.ADDTEXT,
    value: message,
});
export const recieveTextAmount = (message: IMessage): RecieveTextAction => ({
    type: ActionNames.RECIEVETEXT,
    value: message,
});
// reducer
export interface IMessage {
    message: string;
    timestamp: string;
    uuid: string;
    userid: string;
    roomid: string;
}
export interface AppState {
    messages: IMessage[];
    socket: SocketIOClient.Socket;
    userid: string;
    menbers: string[];
    roomid: string;
}

export type AppActions = AddTextAction | RecieveTextAction;

export default function reducer(state: AppState = initialState, action: AppActions): AppState {
    switch (action.type) {
        case ActionNames.ADDTEXT:
            state.socket.emit("addText", action.value);
            state.messages.push(action.value);
            return {
                ...state,
            };
        case ActionNames.RECIEVETEXT:
            state.messages.push(action.value);
            return {
                ...state,
            };
        default:
            return state;
    }
}
