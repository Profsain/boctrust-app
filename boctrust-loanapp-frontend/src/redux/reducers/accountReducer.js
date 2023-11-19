import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch accounts
const apiUrl = import.meta.env.VITE_BASE_URL;
  
const API_ENDPOINT = `${apiUrl}/api/account/accounts`;

// Thunk to fetch account from the API
export const fetchAccount = createAsyncThunk('account/fetchAccount', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// account slice
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accounts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accounts = action.payload;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default accountSlice.reducer;
