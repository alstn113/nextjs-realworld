import { AppState } from '@/app/store';
import client from '@/utils/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface KanyeState {
  data: { quote: string };
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: KanyeState = {
  data: { quote: 'Click that button' },
  status: 'idle',
  error: '',
};

export const getKanyeQuote = createAsyncThunk('kanye/kanyeQuote', async () => {
  const response = await client.get('/api/kanye');
  return response.data;
});

export const kanyeSlice = createSlice({
  name: 'kanyeQuote',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getKanyeQuote.pending, state => {
        state.status = 'pending';
      })
      .addCase(getKanyeQuote.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.data = payload;
      })
      .addCase(getKanyeQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = JSON.stringify(action.error);
      });
  },
});

export const selectKanye = (state: AppState) => state.kanyeQuote;
export default kanyeSlice;
