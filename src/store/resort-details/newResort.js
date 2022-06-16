/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: ' ',
};

const newResortSlice = createSlice({
  name: 'newResort',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const setNewResort = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      'https://resorts-booking-api.herokuapp.com/resorts',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          Authorization: sessionStorage.getItem('JwtAccessToken'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    dispatch(setMessage(res.message));
  } catch (error) {
    dispatch(setMessage('Could not add resort'));
  }
};

export const { setMessage } = newResortSlice.actions;
export default newResortSlice.reducer;
