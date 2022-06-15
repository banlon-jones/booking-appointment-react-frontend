import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const resortsSlice = createSlice({
  name: 'resorts',
  initialState,
  reducers: {
    resortsFetched: (state, action) => action.payload,
  },
});

export const { resortsFetched } = resortsSlice.actions;
export default resortsSlice.reducer;
