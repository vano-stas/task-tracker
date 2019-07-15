import React from "react";

import "./todo-form.scss";


function TodoForm ({ head, text, handleEnter, handleSubmit, handleInputChange }) {

    // const initFormState = {
    //     id: null,
    //     head: "",
    //     text: "",
    //     isCompleted: false
    // }

    // const [val, setVal] = useState (initFormState);

    

    // const handleInputChange = e => {
    //     console.log(e.target.value);
    //     const {name, value} = e.target;
    //     setVal({...val, [name]:value })

    // }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if (!val.head || !val.text) return;
    //     if (e.keyCode === 13) {
    //         addTodo(val);
    //         setVal(initFormState);


    //     }
        
    // }

    // function handleEnter(e) {
    //     // e.preventDefault();
    //     if (!val.head || !val.text) return;
    //     if (e.keyCode == 13) {
    //         addTodo(val);
    //         setVal(initFormState);
    //     }
    // }
    
    return (
        <form className="todo-form" onSubmit = {handleSubmit}>
            <label htmlFor="head">Head:</label>
            <input className="form-control todo-input" type="text" name="head" value={head} onKeyDown={handleEnter} onChange={handleInputChange} />
            <label htmlFor="text">Task:</label>
            <input className="form-control todo-input" type="text" name="text" value={text} onKeyDown={handleEnter} onChange={handleInputChange} />
            {/* <button>Add</button> */}
        </form> 
    )

}

export default TodoForm;