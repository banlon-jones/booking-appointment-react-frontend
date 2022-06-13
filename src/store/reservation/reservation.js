import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const createReservation = createAsyncThunk('createReservation', async () => {

});

const initialState = {
  reservation: {},
  isLoading: false,
}

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {

  }
})
