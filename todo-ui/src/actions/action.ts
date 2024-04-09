"use server";

import { revalidatePath } from "next/cache";

// add todo

export async function add_todo(
  state: { status: string; message: string },
  formData: FormData
) {
  const input_todo = formData.get("add_task") as string;

  // Add Todo validation with zod
  try {
    const response = await fetch("http://127.0.0.1:8000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: input_todo }),
    });
    revalidatePath("/todos");
    return { status: "success", message: "Task added successfully" };
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}

export async function edit_todo(
  state: { status: string; message: string },
  {
    todo_id,
    content,
    is_completed,
  }: { todo_id: number; content: string; is_completed: boolean }
) {
  try {
    const response = await fetch(`http:/127.0.0.1:8000/todos/${todo_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        isCompleted: is_completed,
      }),
    });
    const res = await response.json();
    if (res.content) {
      revalidatePath("/todos/");
      return { status: "success", message: "Todo edited successfully" };
    } else {
      return { status: "error", message: "Not Found" };
    }
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}

export async function status_change(
  id: number,
  content: string,
  isComplete: boolean
) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        isComplete: !isComplete,
      }),
    });
    const res = await response.json();
    if (res.content) {
      revalidatePath("/todos/");
      return { status: "success", message: "Status changed successfully" };
    } else {
      return { status: "error", message: "Not Found" };
    }
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}

export async function delete_todo(id: number) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/todos/");
    return { status: "success", message: "Todo deleted successfully" };
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}
