import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as io from "socket.io-client";
import { Props } from "./ChatBox";
import Container from "./Container";
import { AppState } from "./module";
import store from "./store";
import { generateTimestamp, generateUuid } from "./util";

class WrapperApp extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }

}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <WrapperApp />
        , document.getElementById("app"),
    );
};
