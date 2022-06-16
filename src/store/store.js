/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user';
import resortDetailSlice from './resort-details/resortDetail';
import newResortSlice from './resort-details/newResort';
import updateResortSlice from './resort-details/updateResort';
import resortsSlice from './resorts/resortsSlice';
import reservationSlice from './reservation/reservation';

const store = configureStore({
  reducer: {
    user: userSlice,
    resortDetail: resortDetailSlice,
    newResort: newResortSlice,
    updateResort: updateResortSlice,
    resorts: resortsSlice,
    reservations: reservationSlice,
  },
});

export default store;
