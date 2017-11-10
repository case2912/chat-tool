import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as io from "socket.io-client";
import Container from "./Container";
import store from "./store";

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
