import React from "react";

import "./todo-item.scss";

const TodoItem = () => {
    return (
        <div className="todo-item m-2">
            <div className="icon-item">
                <span>L</span>
            </div>
            <div className="text">
                <h6>Lorem, ipsum.</h6>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio asperiores dolorum quos non consequatur incidunt sed inventore quas debitis. Iste?</span>
            </div>
        </div>
    );
};

export default TodoItem;