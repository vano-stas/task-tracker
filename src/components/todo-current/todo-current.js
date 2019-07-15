import React from "react";
import TodoItem from "../todo-item/todo-item";

import "./todo-current.scss";

function TodoCurrent ({ todos, onToggleCompleted, onToggleActionMenu, todoMenu, deleteItem }) {
 
    return (
        <div className="todo-current">
            <div className="current-header">
                <h4>ToDo (4)</h4>
                <i className="material-icons">view_module</i>
                <i className="material-icons">view_list</i>
            </div>
                { todos
                .filter(todo => todo.isCompleted === false)
                .map((todo) =>  {                       
                        return (
                            <TodoItem 
                                key={todo.id}
                                todo={todo}
                                deleteItem={() => deleteItem(todo.id)}
                                onToggleCompleted={() => onToggleCompleted(todo.id)}
                                onToggleActionMenu={onToggleActionMenu}
                                todoMenu={todoMenu}
                            />
                        )
                    })
                }


                {/* { todos.map((todo) =>  {
                    const id = todo.id;
                    if (todo.isCompleted === false) {
                        
                        return (
                            <TodoItem 
                                key={id}
                                index={id}
                                todo={todo}
                                onToggleCompleted={onToggleCompleted}
                            />
                        )
                    } return <div>Sorry</div>
                })
                } */}
        </div>
    );
};

export default TodoCurrent;