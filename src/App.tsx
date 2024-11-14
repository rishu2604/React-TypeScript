import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
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
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
