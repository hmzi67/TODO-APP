import TodoTypes from "@/lib/Typs";
import Todo from "./Todo";


export default async function TodoTable() {
    const response = await fetch('http://127.0.0.1:8000/todos/')
    const data = await response.json()
    const todo_list: TodoTypes[] = data.sort((a:TodoTypes, b:TodoTypes)=> a.id - b.id)
    return (
        <table className="w-full">
            <thead>
                <tr className="flex justify-between items-center p-2 bg-gray-100 shadow-md">
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todo_list.map((task: TodoTypes) => (
                        <Todo key={task.id} todo={task}/>
                    ))
                }
            </tbody>
        </table>
    )
}
