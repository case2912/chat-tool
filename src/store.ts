import { Action, combineReducers, createStore } from "redux";
import reducer, { AppActions, AppState } from "./module";

export default createStore(
    combineReducers({
        reducer,
    }),
);

export type ReduxState = {
    reducer: AppState,
};

export type ReduxAction = AppActions | Action;
