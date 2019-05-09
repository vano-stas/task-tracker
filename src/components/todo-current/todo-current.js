import React from "react";
import TodoItem from "../todo-item/todo-item";

import "./todo-current.scss";

function TodoCurrent ({ todos, onToggleCompleted }) {
 
    return (
        <div className="todo-current">
            <div className="current-header">
                <h4>ToDo (4)</h4>
                <i className="material-icons">view_module</i>
                <i className="material-icons">view_list</i>
            </div>

                { todos.map((todo) =>  {
                    const id = todo.id;
                    if (todo.isCompleted === false) {
                        
                        return (
                            <TodoItem 
                                key={id}
                                index={id}
                                todo={todo}
                                // onToggleCompleted={onToggleCompleted}
                            />
                        )
                    }
                })
                }
        </div>
    );
};

export default TodoCurrent;