import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import { Login } from "./components/login";
import { LINK_HREF, STRINGS } from "constant_values";
import { Counter } from "components/counter";

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const onClickToggleLoginModal = (isOpen: boolean) => {
        setModalOpen(isOpen);
    };

    return (
        <div className="app">
            <Counter />
            <Link
                to={LINK_HREF.LOGIN}
                onClick={() => onClickToggleLoginModal(true)}
            >
                {STRINGS.LOGIN}
            </Link>

            <Route path={LINK_HREF.LOGIN}>
                <Login
                    isModalOpen={isModalOpen}
                    onClickToggleLoginModal={onClickToggleLoginModal}
                />
            </Route>
        </div>
    );
};

export default App;
