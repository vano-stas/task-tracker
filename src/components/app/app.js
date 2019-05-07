import React from "react";
import NavigationBar from "../navigation-bar/navigation-bar";
import HeaderApp from "../header-app/header-app";
import MainApp from "../main-app/main-app";

import "./app.scss";

const App = () => {
    return (
        <div className="App">
            <NavigationBar />
            <HeaderApp />
            <MainApp />
        </div>
    );
};

export default App;