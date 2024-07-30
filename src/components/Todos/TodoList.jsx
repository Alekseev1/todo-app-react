import Todo from "./Todo";
import styles from "./TodoList.module.scss";

const Todolist = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          deleteTodo={deleteTodo}
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default Todolist;
