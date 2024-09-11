"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Slices/TodoSlice";
import "../Styles/global.css";

const AddTodo = () => {
  const [desc, setDesc] = useState<string>(""); // MANAGES THE INPUT FIELD STATE
  const dispatch = useDispatch();

  // LOAD TODOS FROM LOCALSTORAGE ON MOUNT
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todosArray = JSON.parse(storedTodos);
      todosArray.forEach((todo: any) => {
        dispatch(addTodo(todo)); // DISPATCHING THE FULL TODO OBJECT WITH ID AND COMPLETED
      });
    }
  }, [dispatch]);

  // HANDLE FORM SUBMISSION
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (desc.trim() === "") {
      alert("Description can't be empty 📪");
    } else {
      const newTodo = { id: Math.random(), desc, completed: false }; // CREATING A FULL TODO OBJECT

      dispatch(addTodo(newTodo)); // DISPATCH THE FULL TODO OBJECT TO REDUX

      // GET CURRENT TODOS FROM LOCALSTORAGE
      const storedTodos = localStorage.getItem("todos");
      const todosArray = storedTodos ? JSON.parse(storedTodos) : [];

      // ADD NEW TODO TO LOCALSTORAGE (STORE FULL OBJECT)
      todosArray.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todosArray));

      setDesc(""); // CLEAR INPUT FIELD AFTER ADDING
    }
  };

  // RETURN JSX TEMPLATE
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)} // UPDATE INPUT FIELD STATE
        name="todo"
        id="todo"
        placeholder="Enter your todo" // INPUT PLACEHOLDER
      />
      <button type="submit">Add Todo</button> {/* BUTTON TO ADD TODO */}
    </form>
  );
};

export default AddTodo;
