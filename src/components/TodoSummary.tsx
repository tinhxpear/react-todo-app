import { Todo } from "../types/todo"

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}
const TodoSummary = ({todos, deleteAllCompleted} : TodoSummaryProps) => {
  const completedTodos = todos.filter(todo => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button className="text-red-500 hover:underline text-sm font-medium" onClick={deleteAllCompleted}>
          Delete all completed
        </button>
      )}
    </div>
  )
}

export default TodoSummary;