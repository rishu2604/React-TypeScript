import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// Context Provider component, which will be responsible for managing that context state and providing the state to all components that are interested in it.
const TodosContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  // useState is also a generic type, so we can pass a type argument to it
  // setTodos is of type React.Dispatch<React.SetStateAction<T>>
  // type never means that no values are allowed in there
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredTodo: string) => {
    const newTodo = new Todo(enteredTodo);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
      // concat returns a new array
      // and we need a new array to update the state
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
