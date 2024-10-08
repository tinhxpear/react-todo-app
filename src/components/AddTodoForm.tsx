import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}
const AddTodoForm = ({onSubmit} : AddTodoFormProps) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!input.trim()) return;
        onSubmit(input);
        setInput("");
    }
  return (
    <form className="flex" onSubmit={handleSubmit}>
        <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder="What needs to be done?"
            className="rounded-s-md grow border border-gray-400 p-2"/>
        <button type="submit" className="w-16 rounded-e-md bg-slate-900 hover:bg-slate-800 text-white">Add</button>
    </form>
  )
}

export default AddTodoForm