import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todo";

export default function useTodo(){
    const [todos, setTodos] = useState(() => {
        const savedTodos : Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : dummyData;
      });
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])
      const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo)))
      }
      const handleAddTodo = (title: string) => {
        setTodos(prevTodos => [
          {
            id: Date.now(),
            title,
            completed: false
          },
          ...prevTodos
        ])
      }
      const handleDelete = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      }
      const handledeleteAllCompleted = () => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.completed !== true))
      }

      return {
        todos,
        setTodoCompleted,
        handleAddTodo,
        handleDelete,
        handledeleteAllCompleted
      }
};