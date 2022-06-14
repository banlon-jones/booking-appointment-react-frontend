import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { create, fetchReservation } from '../../services/reservation/reservation.service';

export const createReservation = createAsyncThunk('createReservation', async (reservation) => {
  if (sessionStorage.getItem('JwtAccessToken')) {
    const data = await create(reservation);
    console.log(data);
    return data;
  }
  return null;
});

export const getReservation = createAsyncThunk('getReservation', async () => {
  if (sessionStorage.getItem('JwtAccessToken')) {
    const data = await fetchReservation();
    return data;
  }
  return null;
});

const initialState = {
  reservations: [],
  isLoading: false,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    isLoading(state) {
      return { ...state, isLoading: true };
    },
    stopLoading(state) {
      return { ...state, isLoading: false };
    },
    setReservations(state, action) {
      return { ...state, isLoading: false, reservations: action.payload };
    },
  },
  extraReducers: {
    [createReservation.pending]: (state) => ({ ...state, isLoading: true }),
    [createReservation.fulfilled]: (state) => ({ ...state, isLoading: false }),
    [getReservation.fulfilled]: (state, action) => ({ ...state, reservations: action.payload }),
  },
});

export const { isLoading, stopLoading, setReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
