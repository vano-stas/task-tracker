import React from "react";
import TodoForm from "../todo-form/todo-form";

import "./todo-add-modal.scss";

function TodoAddModal ({addTodo, todos}) {

    return (
        <div className="todo-add-modal-wrapper visible">
            <div className="todo-add-modal">
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    )
}

export default TodoAddModal;