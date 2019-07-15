import React from "react";
import TodoForm from "../todo-form/todo-form";

import "./todo-add-modal.scss";

function TodoAddModal ({addTodo, todos, onToggleModal, val, handleEnter, handleSubmit, handleInputChange}) {

    const toggleModal = (e) => {
        // console.log(e.target.nodeName);
        // console.log(e.target.children);
        if (e.target.className !== 'todo-add-modal' && e.target.nodeName !== 'INPUT'
            && e.target.nodeName !== 'FORM' && e.target.nodeName !== 'LABEL') {
            onToggleModal()
        }
    }

    return (
        <div className="todo-add-modal-wrapper" onClick={toggleModal}>
            <div className="todo-add-modal">
            <button type="button" className="close"
                onClick={onToggleModal}>
                <span>&times;</span>
            </button>
                <TodoForm addTodo={addTodo}
                    val={val}
                    handleEnter={handleEnter}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange} />
            </div>
        </div>
    )

    // return (
    //     <div className="todo-add-modal-wrapper visible">
    //         <div className="todo-add-modal">
    //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //         </button>
    //             <TodoForm addTodo={addTodo} />
    //         </div>
    //     </div>
    // )
}

export default TodoAddModal;