import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch employer
  const apiUrl = import.meta.env.VITE_BASE_URL;
const API_ENDPOINT = `${apiUrl}/api/agency/employers`;

// Thunk to fetch employer from the API
export const fetchEmployers = createAsyncThunk('employer/fetchEmployers', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// employer slice
const employerSlice = createSlice({
  name: 'employer',
  initialState: {
    employers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employers = action.payload;
      })
      .addCase(fetchEmployers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default employerSlice.reducer;
