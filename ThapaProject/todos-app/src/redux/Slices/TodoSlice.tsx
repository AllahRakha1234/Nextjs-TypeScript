import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// DEFINING TYPE OF TODO
export type Todo = {
  id: number;
  desc: string;
  completed: boolean;
};

// INITIAL STATE OF THE STORE
const initialState: Todo[] = [];

// SLICE IS LIKE A DATA STORE. WE CAN STORE MANY STORES AS WE NEED LIKE FOR STUDENTS, FACULTY, EXAMS ETC
const todosSlice = createSlice({
  name: "todos", // Name of the store
  initialState, // Initial state of the store
  reducers: {
    
    // Adding full todo object instead of just description
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },

    // To toggle completed status
    toggleTodoActivity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed; // Toggling completed status
      }
    },

    // To delete Todo
    deleteTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((todo: Todo) => todo.id !== id);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoActivity } = todosSlice.actions; // Exporting Actions
export default todosSlice.reducer; // Exporting Reducers
