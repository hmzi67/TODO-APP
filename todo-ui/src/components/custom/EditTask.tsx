'use client'
import TodoTypes from "@/lib/Typs";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { edit_todo } from "@/actions/action";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditTask({task}: {task: TodoTypes}) {
  const [value, setValue] = useState(task.content);
  const [state, formAction] = useFormState(edit_todo, {status:"", message:""})
  const {status, message} = state;

  useEffect(()=>{
    status == 'success' ? toast.success(message): '' 
    status == 'error'?  toast.error(message): ''
  }, [state])

  const handleSubmit = (formData: FormData) => {
    const todo_id: number = task.id;
    const content: string = formData.get('edit_task') as string;
    const is_completed: boolean = task.isComplete;
    formAction({todo_id, content, is_completed})
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form action={handleSubmit} className='flex flex-col gap-4 '>
      <input 
        onChange={handleChange} 
        type="text"
        placeholder='Edit task'
        required
        min={3}
        max={54}
        value={value}
        name='edit_task' 
        className='w-full py-2 border focus:outline-none rounded-md px-2' />
      <SubmitButton />
    </form>
  )
}
