"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodoActivity
} from "../redux/Slices/TodoSlice";
import "../app/page.module.css";

interface TodoType {
  id: number;
  desc: string;
  completed: boolean;
};

interface RootState {
  todos: TodoType[];
}


// TODOS COMPONENT
const Todos = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("todos");

  const todos = useSelector((state: any) => state.todos); // ACCESS THE TODOS FROM THE REDUX STORE
  const dispatch = useDispatch();
  let filterData = todos;

  const handleCheckBoxTodoBtn = (id: number) => {
    dispatch(toggleTodoActivity(id)); // DISPATCH ACTION TO TOGGLE `COMPLETED` STATE
  };

  const handleDeleteTodoBtn = (id: number) => {
    dispatch(deleteTodo(id)); // DISPATCH ACTION TO DELETE A TODO
  };

  // FILTER THE TODOS BASED ON THE QUERY
  if (query === "active") {
    filterData = todos.filter((todo: TodoType) => todo.completed === false);
  }

  if (query === "completed") {
    filterData = todos.filter((todo: TodoType) => todo.completed === true);
  }

  // SYNC TODOS TO LOCALSTORAGE WHENEVER THE `TODOS` STATE CHANGES
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // SAVE TODOS TO LOCALSTORAGE
  }, [todos]); // TRIGGER THIS EFFECT WHEN `TODOS` CHANGES

  // RETURN JSX
  return (
    <div>
      <ul className="main-task">
        {filterData.length !== 0 ? (
          filterData.map((todo: TodoType) => {
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
                    aria-label={`Delete ${todo.desc}`}
                    onClick={() => {
                      handleDeleteTodoBtn(todo.id);
                    }}
                    className="btn"
                  >
                    DELETE
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
