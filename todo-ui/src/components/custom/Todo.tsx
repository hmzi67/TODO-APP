'use client'
import { ImBin } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import TodoTypes from "@/lib/Typs";
import ToolTip from "./ToolTip";
import { DialogBox } from "./DialogBox";
import { delete_todo, status_change } from "@/actions/action";
import toast from "react-hot-toast";

export default function Todo({ todo }: { todo: TodoTypes }) {
    const handleStatus = async () => {
        const response = await status_change(
          todo.id,
          todo.content,
          todo.isComplete
        );
        if (response.status == "success") {
          toast.success(response.message);
        } else if (response.status == "error") {
          toast.error(response.message);
        }
      };

    const handleDelete = async () => {
        const response = await delete_todo(todo.id)
        if(response.status == "success"){
            toast.success(response.message)
        } else if (response.status == "error") {
            toast.error(response.message);
          }
    }
    return (
        <tr className="flex justify-between rounded-md items-center border p-2 mt-1">
            <td className="flex gap-x-2 items-center">

                <ToolTip tool_tip_Content="Mark as done" >
                    <button onClick={handleStatus} >
                        <MdOutlineLibraryAddCheck
                            size={24}
                            className={`${ todo.isComplete ? "text-green-500" : "text-black"}`} />
                    </button>
                </ToolTip>
                {todo.content}
            </td>
            <td className="flex gap-x-2">
                <ToolTip tool_tip_Content="Edit Todo">
                    <DialogBox title="Edit Todo" editing={true} task={todo} >
                        <FaEdit size={24} className="cursor-pointer text-blue-500" />
                    </DialogBox>
                </ToolTip>
                <ToolTip tool_tip_Content="Delete Todo">
                    <button onClick={handleDelete}>
                    <ImBin size={24} className="cursor-pointer text-red-500" />
                    </button>
                </ToolTip>
            </td>
        </tr>
    )
}
