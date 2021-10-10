import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import { Login } from "./components/login";
import { LINK_HREF, STRINGS } from "constant_values";
import { Counter } from "components/counter";

import "./App.css";

const {
    ABOUT,
    CONTACT,
    DOCUMENTATION,
    HOME,
    JOBS,
    LOGIN,
    MORE,
    REPORT_ISSUE,
    SIGN_UP,
    YOUR_WEBSITE,
} = STRINGS;

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const onClickLogin = () => {
        onClickToggleLoginModal(true);
    };

    const onClickToggleLoginModal = (isOpen: boolean) => {
        setModalOpen(isOpen);
    };

    return (
        <React.Fragment>
            <Route path={LINK_HREF.LOGIN}>
                <Login
                    isModalOpen={isModalOpen}
                    onClickToggleLoginModal={onClickToggleLoginModal}
                />
            </Route>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a
                        className="navbar-item"
                        href="https://robohash.org/27.115.124.66.png"
                    >
                        <img
                            src="https://robohash.org/27.115.124.66.png"
                            width="28"
                            height="28"
                        />
                    </a>

                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">{YOUR_WEBSITE}</a>
                        <a className="navbar-item">{HOME}</a>

                        <a className="navbar-item">{DOCUMENTATION}</a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">{MORE}</a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">{ABOUT}</a>
                                <a className="navbar-item">{JOBS}</a>
                                <a className="navbar-item">{CONTACT}</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">{REPORT_ISSUE}</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>{SIGN_UP}</strong>
                                </a>

                                <Link
                                    to={LINK_HREF.LOGIN}
                                    onClick={onClickLogin}
                                >
                                    <span className="button is-light">
                                        {LOGIN}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="counter">
                <Counter />
            </div>
        </React.Fragment>
    );
};

export default App;
