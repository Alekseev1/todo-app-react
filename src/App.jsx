import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles/App.scss";
import Todolist from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import TodosAct from "./components/Todos/TodosAct";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosAct
          completedTodosExist={!!completedCount}
          resetTodos={resetTodoHandler}
          deleteCompTodos={deleteCompTodoHandler}
        />
      )}

      <Todolist
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
        todos={todos}
      />
		{completedCount > 0 && <h2>{`You have completed ${completedCount} todos`}</h2>}
    </div>
  );
}
export default App;
