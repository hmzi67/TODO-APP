import { DialogBox } from "@/components/custom/DialogBox";
import TodoTable from "@/components/custom/TodoTable";
import { Button } from "@/components/ui/button";
import TodoTypes from "@/lib/Typs"


export default function Home() {
  const todo: TodoTypes = {
    id: 0,
    isComplete: false,
    content: '',
  }
  return (
    <main className="w-screen">
      <div className="p-5" >
        <h1 className="text-5xl font-bold ">Todo App</h1>
        <p className="text-xl opacity-95 mt-2">You can add, remove and edit your todos by using this web app</p>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        {/* Add a new task */}
        <div className="flex flex-col w-3/5">
          <section className="pt-10 ">
            <DialogBox task={todo} title="Add A New Task" adding={true}>
              <Button variant="default" className="py-1 px-9 w-full bg-[#ff5631] rounded-xl hover:bg-gray-700 text-white font-semibold uppercase text-lg">Add Task</Button>
            </DialogBox>
          </section>

          {/*  Tasks list */}
          <section className="mt-4 overflow-y-auto h-96">
            <TodoTable />
          </section>
        </div>
      </div>
    </main>
  );
}
