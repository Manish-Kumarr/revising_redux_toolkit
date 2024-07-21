import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  status: '',
  error: null,
};

export const fetchUsers = createAsyncThunk('user/fetchUser', async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  } catch (err) {
    return err;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'sucess';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'failed';
      })
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'pending';
      });
  },
});

export default userSlice.reducer;
