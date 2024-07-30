import { RiTodoFill } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import styles from "./Todo.module.scss";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        onClick={() => deleteTodo(todo.id)}
        className={styles.deleteIcon}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
};

export default Todo;
