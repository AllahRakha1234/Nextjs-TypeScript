"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Slices/TodoSlice";
import "../Styles/global.css";

const AddTodo = () => {
  const [desc, setDesc] = useState<string>(""); // Manages the input field state
  const dispatch = useDispatch();

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todosArray = JSON.parse(storedTodos);
      todosArray.forEach((todo: any) => {
        dispatch(addTodo(todo)); // Dispatching the full todo object with id and completed
      });
    }
  }, [dispatch]);

  // Handle form submission
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (desc.trim() === "") {
      alert("Description can't be empty 📪");
    } else {
      const newTodo = { id: Math.random(), desc, completed: false }; // Creating a full todo object

      dispatch(addTodo(newTodo)); // Dispatch the full todo object to Redux

      // Get current todos from localStorage
      const storedTodos = localStorage.getItem("todos");
      const todosArray = storedTodos ? JSON.parse(storedTodos) : [];

      // Add new todo to localStorage (store full object)
      todosArray.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todosArray));

      setDesc(""); // Clear input field after adding
    }
  };

  // Return JSX template
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        name="todo"
        id="todo"
        placeholder="Enter your todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
