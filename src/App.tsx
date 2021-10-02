import React from "react";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="app-header">
                <Link to={"/login"}>LOG IN</Link>
            </div>
        </div>
    );
};

export default App;
