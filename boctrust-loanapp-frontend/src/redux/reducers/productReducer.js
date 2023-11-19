import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch product
const apiUrl = import.meta.env.VITE_BASE_URL;
  
const API_ENDPOINT = `${apiUrl}/api/product/products`;

// Thunk to fetch product from the API
export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// product slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
