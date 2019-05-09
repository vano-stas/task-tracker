import React, {useState} from "react";
import NavigationBar from "../navigation-bar/navigation-bar";
import HeaderApp from "../header-app/header-app";
import MainApp from "../main-app/main-app";
import TodoAddModal from "../todo-add-modal/todo-add-modal";

import "./app.scss";

function App () {
    const [todos, setTodos] = useState ([
        {
            id: 1,
            head: "Главная цель",
            text: "Выжить в долине смерти",
            isCompleted: false,
        },
        {
            id: 2,
            head: "Задание",
            text: "Выполнить пункты из задания",
            isCompleted: true,
        }
    ]);

    const addTodo = value => {
        value.id = todos.length + 1;
        setTodos ([...todos, value]);
    }
    
    // const onToggleCompleted  = e => {
    // }


    return (
        <div className="App">
            <TodoAddModal addTodo={addTodo} />
            <NavigationBar />
            <HeaderApp 
            addTodo={addTodo} />
            <MainApp
            todos={todos}
            // onToggleCompleted={onToggleCompleted}
             />
        </div>
    );
};

export default App;