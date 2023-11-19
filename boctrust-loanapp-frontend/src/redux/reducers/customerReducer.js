import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch accounts
const apiUrl = import.meta.env.VITE_BASE_URL;
  
const API_ENDPOINT = `${apiUrl}/api/customer/customers`;

// Thunk to fetch account from the API
export const fetchAllCustomer = createAsyncThunk('account/fetchAllCustomer', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// customer slice
const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCustomer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
      })
      .addCase(fetchAllCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default customerSlice.reducer;
