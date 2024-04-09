import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const {pending} = useFormStatus()
  return (
    <button disabled={ pending } className={`${pending ? "opacity-80": "opacity-100 hover:opacity-90" } bg-[#ff5631] py-2 text-md uppercase rounded-xl text-white  duration-200`}>
      {
        pending ? "Saving... " : "Save"
      }
    </button>
  )
}
