import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import { Login } from "./components/login";

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const onClickToggleLoginModal = (isOpen: boolean) => {
        setModalOpen(isOpen);
    };

    return (
        <div className="app">
            <Link to={"/login"} onClick={() => onClickToggleLoginModal(true)}>
                LOG IN
            </Link>

            <Route path="/login">
                <Login
                    isModalOpen={isModalOpen}
                    onClickToggleLoginModal={onClickToggleLoginModal}
                />
            </Route>
        </div>
    );
};

export default App;
