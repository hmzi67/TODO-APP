'use client'
import { add_todo } from "@/actions/action"
import { useEffect, useRef } from "react"
import { useFormState } from "react-dom"
import toast from "react-hot-toast"
import SubmitButton from "./SubmitButton"

export default function Form() {
  const ref = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(add_todo,{status: "", message: ""})
  const {status, message} = state

  useEffect(()=>{
    if(status == 'success') {
      ref.current?.reset()
      toast.success(message)
    } else if(status == 'error') {
      toast.error(message)
    }
  }, [state])

  return (
    <form ref={ref} action={formAction} className='flex flex-col gap-4 '>
      <input 
      type="text"
      placeholder='Add a new task'
      required
      min={3}
      max={54}
      name='add_task' 
      className='w-full py-2 border focus:outline-none rounded-xl px-2' />
      <SubmitButton/>
    </form>
  )
}
