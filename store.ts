import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
