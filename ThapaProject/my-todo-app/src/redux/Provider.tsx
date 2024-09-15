"use client"
import React, { ReactNode } from 'react';
import { Provider } from "react-redux";
import { TodoStore } from './store';

// DEFINE AN INTERFACE FOR THE COMPONENT'S PROPS
interface TodoProviderProps {
    children: ReactNode;
}

// DEFINE THE COMPONENT USING REACT.FC AND THE PROPS INTERFACE (FC MEANS FUNCTIONAL COMPONENT ==> Automatically infers children prop type as ReactNode)
const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    return <Provider store={TodoStore}>{children}</Provider>;
}

export default TodoProvider;
