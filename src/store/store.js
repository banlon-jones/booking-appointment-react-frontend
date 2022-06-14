import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user';
import resortsSlice from './resorts/resortsSlice';
import reservationSlice from './reservation/reservation';

const store = configureStore({
  reducer: {
    user: userSlice,
    resorts: resortsSlice,
    reservations: reservationSlice,
  },
});

export default store;
