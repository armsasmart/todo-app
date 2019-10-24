import React from "react";
import Navbar from "./components/navbar";
import TodoList from "./components/todolist";
import {TodoStore} from "./TodoStore";

function App() {
    const store = new TodoStore();
    return (
        <>
            <Navbar store={store}/>
            <TodoList store={store}/>
        </>
    );
};

export default App;
