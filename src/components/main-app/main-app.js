import React from "react";
import TodoContainer from "../todo-container/todo-container";
import TodoCurrent from "../todo-current/todo-current";
import TodoCompleted from "../todo-completed/todo-completed";

import "./main-app.scss";

const MainApp = () => {
    return (
        <div className="main-app">
            <TodoCurrent />
            <TodoCompleted />
        </div>
    );
};

export default MainApp;