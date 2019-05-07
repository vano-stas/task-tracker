import React from "react";

import logo from "../img/react_36.png";
import "./navigation-bar.scss";

const NavigationBar = () => {
    return (
        <nav className="nav-app">
        <div className="logo">
            <a className="a-link" href="#">
                <img src={logo} alt=""/>ToDo
            </a>
            {/* <img src="../img/react_36.png" alt=""/> */}
            {/* <span>ToDo</span> */}
        </div>
        <div className="navigation-bar">
            <ul className="">
                <li className="active">
                    <a className="a-link" href="#home">
                        <i className="material-icons">home</i>
                        Home
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="">
                    <a className="a-link" href="#settings">
                    <i className="material-icons">settings</i>
                        Settings
                    </a>
                </li>
            </ul>
            {/* <ul className="navbar-nav">
                <li className="nav-item"><a className="navbar-brand pl-3 " href="#">ToDo</a></li>
                <li clasNames="nav-item active">
                    <a className="nav-link pl-3" href="#">
                        <i className="fa fa-home pr-2" aria-hidden="true"></i>
                        Home */}
                        {/* <span class="sr-only">(current)</span> */}
                    {/* </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pl-3" href="#">
                        <i className="fa fa-cog pr-2" aria-hidden="true"></i>
                        Settings
                    </a>
                </li>
            </ul> */}
        </div>
    </nav>
    )
};

export default NavigationBar;