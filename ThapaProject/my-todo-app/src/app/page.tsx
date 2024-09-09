"use client"
import React from 'react'
import AddTodo from '../Components/AddTodo'
import Navbar from '../Components/Navbar'
import Todos from '../Components/Todos'
import "../Styles/global.css"

const Page = () => {
  return (
    <main>
        <h2>TODO NEXTJS + TYPESCRITP + REDUX TOOLKIT</h2>
        <Navbar/>
        <AddTodo/>
        <Todos/>
    </main>
  )
}

export default Page