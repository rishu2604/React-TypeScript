import React, { useRef, useContext } from "react";
import classes from "../styles/NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  // useRef is actually a generic type out of the box, so we can pass a type argument to it
  const todoTextIputRef = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext);

  // event is an object that is passed by the browser to the event handler function
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = todoTextIputRef.current?.value;
    // null check (here inferred type is string | undefined)

    const enteredText = todoTextIputRef.current!.value;
    // Here we are 100% sure that the value is not null or undefined
    // Here inferred type is string

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextIputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
