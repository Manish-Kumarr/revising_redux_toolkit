import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import userSlice from './features/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: userSlice,
  },
});
