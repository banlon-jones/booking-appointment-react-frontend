/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: ' ',
};

const updateResortSlice = createSlice({
  name: 'updateResort',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const setUpdateResort = (data, id) => async (dispatch) => {
  const url = `https://resorts-booking-api.herokuapp.com/resorts/${id}`;
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        Authorization: sessionStorage.getItem('JwtAccessToken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    dispatch(setMessage(res.message));
  } catch (error) {
    dispatch(setMessage('Could not update resort'));
  }
};

export const { setMessage } = updateResortSlice.actions;
export default updateResortSlice.reducer;
