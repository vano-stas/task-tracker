import React, {useState, useEffect } from "react";
import NavigationBar from "../navigation-bar/navigation-bar";
import HeaderApp from "../header-app/header-app";
import MainApp from "../main-app/main-app";
import TodoAddModal from "../todo-add-modal/todo-add-modal";

import ReactDOM from "react-dom";

import "./app.scss";
import TodoItemMenu from "../todo-item-menu/todo-item-menu";

function App () {

    const dataTXT = localStorage.getItem("react-todos");
    const data = JSON.parse(dataTXT);

    const initState = data || [{
        id: 1,
        head: "Description",
        text: "App in process... To be continued. I'll be back:)",
        isCompleted: false
    }];

    const initFormState = {
        id: null,
        head: "",
        text: "",
        isCompleted: false
    }

    const [todos, setTodos] = useState (initState);

    const [val, setVal] = useState (initFormState);

    const [showMenu, setShowMenu] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const [showTodoMenu, setShowTodoMenu] = useState(false);

//--------------------------------------------------

    useEffect(() => {
        let elem = JSON.stringify(todos);
        window.localStorage.setItem("react-todos", elem );
    },[todos]);




    const handleInputChange = e => {
        const {name, value} = e.target;
        setVal({...val, [name]:value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (!val.head || !val.text) return;
        if (e.keyCode === 13) {
            addTodo(val);
            setVal(initFormState);
        }   
    }

    function handleEnter(e) {
        // e.preventDefault();
        if (!val.head || !val.text) return;
        if (e.keyCode === 13) {
            addTodo(val);
            setVal(initFormState);
        }
    }

    //-------------------------------------------------------

    const addTodo = value => {
        value.id = todos.length + 1;
        setTodos ([...todos, value]);
        setVal(initFormState);
        setShowModal (!showModal);
    }

    const deleteItem = id => {
        const index =todos.findIndex((el) => el.id === id);
        const newArr = [
            ...todos.slice(0, index),
            ...todos.slice(index +1 )
        ];
        setTodos(newArr);
    }

    const onToggleMenu = () => {
        setShowMenu (!showMenu);
    }

    const onToggleModal = () => {
        setShowModal (!showModal);
    }
    
    const onToggleCompleted  = (e) => {
        // console.log('click done');
        // console.log(e);
        const index =todos.findIndex((el) => el.id === e);
        // const newArr = [
        //     ...todos.slice(0, index),
        //     ...todos.slice(index +1 )
        // ];
        // console.log(newArr);
        // setTodos(newArr);
        const newEl = todos[index];
        newEl.isCompleted = !newEl.isCompleted;

        const newArr = todos;
        newArr.splice(index, newEl);
        setTodos([...newArr]);
        // let elem = JSON.stringify(todos);
        // window.localStorage.setItem("react-todos", elem );
    }

    const onToggleActionMenu = () => {
        console.log('click Action menu');
        setShowTodoMenu(!showTodoMenu);
    }

    const menu = showMenu ? <NavigationBar /> : null;

    const todoMenu = showTodoMenu ? <TodoItemMenu /> : null;

    const modal = showModal
    ? ReactDOM.createPortal( <TodoAddModal
        addTodo={addTodo}
        onToggleModal={onToggleModal}
        val={val}
        handleEnter={handleEnter}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange} />,
        document.getElementById('modal'))
    : null;

    return (
        <div className="app">
            {modal}
            {menu}
            <div className="main-container"> 
                <HeaderApp onToggleMenu={onToggleMenu}
                    onToggleModal={onToggleModal}
                    addTodo={addTodo} />
                <MainApp
                    todos={todos}
                    deleteItem={deleteItem}
                    onToggleCompleted={onToggleCompleted}
                    onToggleActionMenu={onToggleActionMenu}
                    todoMenu={todoMenu}
                />
            </div>
        </div>
    );
};

export default App;