import React from "react";
import TodoItem from "../todo-item/todo-item";

import "./todo-completed.scss";

const TodoCompleted = () => {
    return (
        <div className="todo-completed">
            <div className="current-header">
                <h4>Completed (3)</h4>
            </div>
            <div className="item">
                <div className="priority">
                    <i className="material-icons md-12">check_circle_outline</i>
                    <span><b>Completed!</b></span>
                    {/* <span className="time-create">7-May 2019 13:00</span> */}
                </div>
                <div className="item-todo-text">    
                    <div className="icon-item">
                        <span>L</span>
                    </div>
                    <div className="text">
                        <h6>Lorem, ipsum.</h6>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio asperiores dolorum quos non consequatur incidunt sed inventore quas debitis. Iste?</span>
                    </div>
                    <div className="edit-menu">
                        <i className="material-icons">more_vert</i>
                    </div>
                </div>
            </div>
            <div className="item"></div>
            <div className="item"></div>
        </div>      
    );
};

export default TodoCompleted;