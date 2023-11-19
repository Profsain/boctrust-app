import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch admin
const apiUrl = import.meta.env.VITE_BASE_URL;
  
const API_ENDPOINT = `${apiUrl}/api/admin/users`;

// Thunk to fetch admin from the API
export const fetchAdmins = createAsyncThunk('admin/fetchAdmins', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// admin slice
const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admins: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.admins = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
