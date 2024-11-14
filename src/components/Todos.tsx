import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "../styles/Todos.module.css";
import { TodosContext } from "../store/todos-context";
// So here we could say that we expect to get some Todos or some items and then in turn could be an array of strings,
// let's say like this.

// const Todos = (props: {items: string[]}) => {
//     return (
//         <ul>
//             {props.items.map(item => <li key={item}>{item}</li>)}
//         </ul>
//     )
// }

// That's how we could say that props is an object with the items key, which then itself holds an array of strings as a value.
// But that would actually not be 100% correct.

// Props does not just have the key value pairs we added on our component when we use it in JSX.
// Instead, props is an object which does have those key value pairs. But remember that they're also always as a special prop, the children prop and we don't even know the type of that yet.

// Now we could find out which type that should be and then add it but it would quickly become cumbersome if for every component that we're defining that is using props, we have to always add those built-in props to that object and then also our custom props.

// And because that's cumbersome, and because we have that base prop object which we get in every component, which for example includes this children prop, React gives us a different way here or React and TypeScript gives us a different way here.
// We can use such a generic type, or to be precise, a functional component out of the box can be turned, can be converted into a generic function. Which then simply means that in the end our functional component will be configured such that we make it clear that it will be our React component function and that it will have all those base props like children. And we can then define explicitly our own props
// like the items prop, for example, here that should be combined into the props object.

// React.FC is already a generic type

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          // bind is a default method in javascript which allows us to pre-configure a function for future execution
        />
      ))}
    </ul>
  );
};

export default Todos;
