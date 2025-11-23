import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux-features/todo-slice';

export const todoStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;