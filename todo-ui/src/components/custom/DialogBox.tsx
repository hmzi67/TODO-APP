import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "./Form"
import { ReactNode } from "react"
import EditTask from "./EditTask"
import TodoTypes from "@/lib/Typs"

export function DialogBox({ children, title, adding, editing, task }: { children: ReactNode, title: string, adding?: boolean, editing?: boolean, task: TodoTypes }) {
  return (
    <Dialog>
      
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900 placeholder:text-gray-600">{title}</DialogTitle>

          </DialogHeader>
          {adding && <Form />}
          {editing && <EditTask task={task} />}
        </DialogContent>
      

    </Dialog>
  )
}
