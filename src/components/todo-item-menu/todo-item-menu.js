import React from "react";

import "./todo-item-menu.scss";

const TodoItemMenu = () => {
    return (
        <div className="todo-item-menu">
            {/* <span className="list-group-item">Edit</span>
            <span className="list-group-item">Delete</span> */}
            <button type="button" class="list-group-item list-group-item-action p-2">Edit</button>
            <button type="button" class="list-group-item list-group-item-action p-2">Delete</button>
        </div>
    );
};

export default TodoItemMenu;