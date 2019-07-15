import React from "react";
import TodoCurrent from "../todo-current/todo-current";
import TodoCompleted from "../todo-completed/todo-completed";
import TodoItemMenu from "../todo-item-menu/todo-item-menu";

import "./main-app.scss";

function MainApp ({todos, onToggleCompleted, onToggleActionMenu, todoMenu, deleteItem }) {
    return (
        <div className="main-app">
            <TodoCurrent
                todos={todos}
                deleteItem={deleteItem}
                onToggleCompleted={onToggleCompleted}
                onToggleActionMenu={onToggleActionMenu}
                todoMenu={todoMenu} />
            <TodoCompleted
                todos={todos}
                deleteItem={deleteItem}
                onToggleCompleted={onToggleCompleted}
                onToggleActionMenu={onToggleActionMenu}
                todoMenu={todoMenu} />
        </div>
    );
};

export default MainApp;