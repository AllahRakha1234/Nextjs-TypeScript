"use client"
import {Provider} from "react-redux"
import {TodoStore} from './store'

const TodoProvider = ({children}: ReactNode)=>{
    return <Provider store={TodoStore}> {children} </Provider>
}

export default TodoProvider;