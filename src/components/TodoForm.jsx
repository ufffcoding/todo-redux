import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!text) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <form
        className="flex w-full  items-center gap-2 justify-between"
        onSubmit={handleAddTodo}
      >
        <input
          className="flex h-10 w-full rounded-md  border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write todo ..."
        ></input>
        <button
          type="button"
          onClick={handleAddTodo}
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
