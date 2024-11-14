import React, { useRef } from "react";
import classes from "../styles/NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // useRef is actually a generic type out of the box, so we can pass a type argument to it
  const todoTextIputRef = useRef<HTMLInputElement>(null);

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

    props.onAddTodo(enteredText);
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