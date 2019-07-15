import React from "react";
import TodoItem from "../todo-item/todo-item";

import "./todo-completed.scss";

function TodoCompleted ({todos, onToggleCompleted, onToggleActionMenu, todoMenu, deleteItem }) {

    const clazz = "done";

    return (
        <div className="todo-completed">
            <div className="current-header">
                <h4>Completed (3)</h4>
            </div>
                { todos.map((todo) =>  {
                    if (todo.isCompleted === true) {
                        return (
                            <TodoItem clazz={clazz}
                                key={todo.id}
                                todo={todo}
                                deleteItem={() => deleteItem(todo.id)}
                                onToggleCompleted={() => onToggleCompleted(todo.id)}
                                onToggleActionMenu={onToggleActionMenu}
                                todoMenu={todoMenu}
                                />
                        )
                    }
                })
                }

        </div>      
    );
};

export default TodoCompleted;