"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodoActivity, Todo } from "../redux/Slices/TodoSlice";
import "../app/page.module.css";

const Todos = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("todos");

  const todos = useSelector((state: any) => state.todos); // Access the todos from the Redux store
  const dispatch = useDispatch();
  let filterData = todos;

  const handleCheckBoxTodoBtn = (id: number) => {
    dispatch(toggleTodoActivity(id)); // Dispatch action to toggle `completed` state
  };

  const handleDeleteTodoBtn = (id: number) => {
    dispatch(deleteTodo(id)); // Dispatch action to delete a todo
  };

  // Filter the todos based on the query
  if (query === "active") {
    filterData = todos.filter((todo: Todo) => todo.completed === false);
  }

  if (query === "completed") {
    filterData = todos.filter((todo: Todo) => todo.completed === true);
  }

  // Sync todos to localStorage whenever the `todos` state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to localStorage
  }, [todos]); // Trigger this effect when `todos` changes

  // Return JSX
  return (
    <div>
      <ul className="main-task">
        {filterData.length !== 0 ? (
          filterData.map((todo: Todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => {
                    handleCheckBoxTodoBtn(todo.id);
                  }}
                />
                <label htmlFor={`todo-${todo.id}`}>{todo.desc}</label>
                {todo.completed && (
                  <button
                    type="button"
                    onClick={() => {
                      handleDeleteTodoBtn(todo.id);
                    }}
                    className="btn"
                  >
                    Delete
                  </button>
                )}
              </li>
            );
          })
        ) : (
          <div>
            <h3 className="msg">NO TODOS TO SHOW</h3>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Todos;
