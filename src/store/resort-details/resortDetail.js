/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resort_details: {},
  loading: false,
};

const resortDetailSlice = createSlice({
  name: 'resortDetail',
  initialState,
  reducers: {
    isSuccess: (state, action) => {
      state.resort_details = action.payload;
    },
    isFailure: (state, action) => {
      state.resort_details = action.payload;
    },
  },
  extraReducers: {},
});

export const getResort = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/resorts/8');
    const data = await response.json();
    dispatch(resortDetailSlice.actions.isSuccess(data.resort));
  } catch (error) {
    dispatch(resortDetailSlice.actions.isFailure(error));
  }
};

// To have a generalize selecte incase the selecter is used in multiple places
export const selectResort = (state) => state.resortDetail.resort_details;

// To expoert the actions and the reducer to the store
export const { isSuccess, isFailure } = resortDetailSlice.actions;
export default resortDetailSlice.reducer;