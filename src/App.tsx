import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import { Login } from "./components/login";
import { LINK_HREF, STRINGS } from "constant_values";
import { Counter } from "components/counter";

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const onClickLink = () => {
        onClickToggleLoginModal(true);
    };

    const onClickToggleLoginModal = (isOpen: boolean) => {
        setModalOpen(isOpen);
    };

    return (
        <div className="app">
            <div className="app-header">
                <Link to={LINK_HREF.LOGIN} onClick={onClickLink}>
                    {STRINGS.LOGIN}
                </Link>
                <Counter />

                <Route path={LINK_HREF.LOGIN}>
                    <Login
                        isModalOpen={isModalOpen}
                        onClickToggleLoginModal={onClickToggleLoginModal}
                    />
                </Route>
            </div>
        </div>
    );
};

export default App;
