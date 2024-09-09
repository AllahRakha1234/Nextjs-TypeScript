import {configureStore} from '@reduxjs/toolkit'
import todosSlice from './Slices/TodoSlice';


export const TodoStore = configureStore({
    reducer:{
        // Here we can add all the slices like Student, Facutly, Exams Slice etc
        todos: todosSlice
    }
})