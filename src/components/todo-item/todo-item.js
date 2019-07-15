import React from "react";
import TodoItemMenu from "../todo-item-menu/todo-item-menu";

import "./todo-item.scss";

function TodoItem ({todo, onToggleCompleted, onToggleActionMenu, todoMenu, deleteItem, clazz }) {

    const randomColor = () => {
        const r = Math.round(Math.random()*255);
        const g = Math.round(Math.random()*255);   
        const b = Math.round(Math.random()*255);
        return (`${r},${g},${b}`);
    };
    const color = randomColor();

    let classes = `item ${clazz}`;


    return (
    <div key={todo.id} className={classes} 
        // onClick={()=>onToggleCompleted(todo.id)}
        >
            <div className="priority">
                <i className="material-icons md-12">arrow_upward</i>
                <span><b>High priority</b></span>
                <span className="time-create">16-July 2019 09:00</span>
            </div>
            <div className="item-todo-text">    
                <div className="icon-item" style={{background: `rgb(${color})`}}>
                    <span>{todo.head[0].toUpperCase()}</span>
                </div>
                <div className="text"  onClick={onToggleCompleted}>
                    <h6> {todo.head} </h6>
                    <span> {todo.text} </span>
                </div>
                <button className="btn btn-outline-light  material-icons delete-item"
                    onClick={deleteItem} >
                    delete_outline
                </button>
                <div className="edit-menu">
                    <button type="button" className="btn action-menu" /*onClick={onToggleActionMenu}*/ >
                        <i className="material-icons">more_vert</i>
                    </button>
                    {todoMenu}
                    
                </div>
            </div>
        </div>
    );
};

export default TodoItem;