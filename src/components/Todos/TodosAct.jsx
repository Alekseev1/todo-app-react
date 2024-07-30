import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

const TodosAct = ({ resetTodos, deleteCompTodos, completedTodosExist }) => {
  return (
    <>
      <Button title="Reset" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete completed"
        onClick={deleteCompTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
};

export default TodosAct;
