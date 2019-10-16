import React, {useState, createContext} from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
        {
            id: Date.now(),
            value: "Buy milk",
            done: false
        },
        {
            id: Date.now() + 1,
            value: "Play with dog",
            done: true
        }
    ]);
    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
};
