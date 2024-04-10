import React, { useState } from "react";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  updateTodo,
  deleteTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  return (
    <>
      <div className="rounded-md w-full border-l-4 border-black bg-gray-100 p-4">
        <div className="flex items-center justify-between space-x-4">
          <input
            className="h-6 w-6 cursor-pointer accent-black"
            onChange={() => {
              dispatch(toggleComplete(todo.id));
            }}
            checked={todo.completed}
            disabled={isEditable}
            type="checkbox"
          />

          <input
            value={isEditable ? text : todo.text}
            onChange={(e) => setText(e.target.value)}
            readOnly={!isEditable}
            className={`${todo.completed ? "line-through" : ""} ${
              isEditable ? " border-black border-2" : ""
            }mx-2 px-2 bg-transparent rounded-lg w-full`}
            type="text"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              if (todo.completed) return;

              if (isEditable) {
                dispatch(updateTodo({ id: todo.id, text }));
                setIsEditable(false);
              } else setIsEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isEditable ? "📁" : "✒️"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteTodo(todo.id));
            }}
          >
            <X className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
