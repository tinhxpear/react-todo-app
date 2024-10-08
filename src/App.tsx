import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodo from "./hooks/useTodo";

function App() {
  const {todos, handleAddTodo, setTodoCompleted, handleDelete,handledeleteAllCompleted} = useTodo();
  return (
    <>
      <main className="py-10 h-screen space-y-5 overflow-y-auto">
        <h1 className="font-bold text-3xl text-center">Your Todo</h1>
        <div className="max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-6">
          <AddTodoForm onSubmit={handleAddTodo}/>
          <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDetele={handleDelete}/>
        </div>
        <TodoSummary todos={todos} deleteAllCompleted={handledeleteAllCompleted}/>
      </main>
    </>
  )
}

export default App
