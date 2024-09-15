"use client";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import AddTodo from '../Components/AddTodo';
import "../Styles/global.css";

// Dynamically import Navbar and Todos
const Navbar = dynamic(() => import('../Components/Navbar'), { ssr: false });
const Todos = dynamic(() => import('../Components/Todos'), { ssr: false });

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
