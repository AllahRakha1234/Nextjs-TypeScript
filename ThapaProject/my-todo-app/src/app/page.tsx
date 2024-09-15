"use client";
import React, { Suspense } from 'react';
import AddTodo from '../Components/AddTodo';
import Navbar from '../Components/Navbar';
import Todos from '../Components/Todos';
import "../Styles/global.css";

const Page = () => {
  return (
    <main>
      <h2>TODO NEXTJS + TYPESCRIPT + REDUX TOOLKIT</h2>
      {/* Wrapping Navbar in a Suspense boundary */}
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <AddTodo />
      {/* Wrapping Todos in a Suspense boundary */}
      <Suspense fallback={<div>Loading Todos...</div>}>
        <Todos />
      </Suspense>
    </main>
  );
};

export default Page;
