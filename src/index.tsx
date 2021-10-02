import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Counter } from "./components/counter";

import { store } from "./store";
import App from "./App";

import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Route path="/login" component={Counter} />
                <Route path="/" component={App} />
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
