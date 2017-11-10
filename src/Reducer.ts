import { ActionNames, AppActions } from "./Action";
import AppState from "./AppState";
import { initialState } from "./Components/App";
import IMessage from "./IMessage";
import * as Util from "./Util";
export default function reducer(state: AppState = initialState, action: AppActions): AppState {
    switch (action.type) {
        case ActionNames.ADDTEXT:
            state.socket.emit("sendText", action.value);
            state.rooms[action.value.roomid].messages.push(action.value);
            return {
                ...state,
            };
        case ActionNames.RECIEVETEXT:
            state.rooms[action.value.roomid].messages.push(action.value);
            return {
                ...state,
            };
        case ActionNames.CREATEROOM:
            const roomid = Util.generateUuid();
            state.socket.emit("selectRoom", roomid);
            state.rooms[roomid] = { roomName: action.value, messages: [] };
            return {
                ...state,
            };
        case ActionNames.JOINROOM:
            const v = action.value.split(":");
            state.socket.emit("selectRoom", v[1]);
            state.rooms[v[1]] = {
                roomName: v[0],
                messages: [],
            };
            return {
                ...state,
            };
        default:
            return state;
    }
}
