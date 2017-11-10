import { Action, combineReducers, createStore } from "redux";
import { AppActions } from "./Action";
import AppState from "./AppState";
import reducer from "./Reducer";
export default createStore(
    combineReducers({
        reducer,
    }),
);

export type ReduxState = {
    reducer: AppState,
};

export type ReduxAction = AppActions | Action;
