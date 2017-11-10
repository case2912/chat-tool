import { Action } from "redux";
import IMessage from "./IMessage";
export enum ActionNames {
    ADDTEXT = "addText",
    RECIEVETEXT = "recieveText",
    CREATEROOM = "createRoom",
    JOINROOM = "joinRoom",
}

interface AddTextAction extends Action {
    type: ActionNames.ADDTEXT;
    value: IMessage;
}
interface RecieveTextAction extends Action {
    type: ActionNames.RECIEVETEXT;
    value: IMessage;
}
interface CreateRoomAction extends Action {
    type: ActionNames.CREATEROOM;
    value: string;
}
interface JoinRoomAction extends Action {
    type: ActionNames.JOINROOM;
    value: string;
}
export const addText = (value: IMessage): AddTextAction => ({
    type: ActionNames.ADDTEXT,
    value,
});
export const recieveText = (value: IMessage): RecieveTextAction => ({
    type: ActionNames.RECIEVETEXT,
    value,
});

export const createRoom = (value: string): CreateRoomAction => ({
    type: ActionNames.CREATEROOM,
    value,
});
export const joinRoom = (value: string): JoinRoomAction => ({
    type: ActionNames.JOINROOM,
    value,
});
export type AppActions = AddTextAction | RecieveTextAction | CreateRoomAction | JoinRoomAction;
