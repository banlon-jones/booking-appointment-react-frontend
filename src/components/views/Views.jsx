import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resorts from '../home/Resorts';
import LogIn from '../login/LogIn';
import SignUp from '../signup/SignUp';
import Reservations from '../reservations/Reservations';
import CreateReservation from '../../createReservation/CreateReversation';

const Views = () => (
  <Routes>
    <Route index element={<Resorts />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/reserve" element={<CreateReservation />} />
  </Routes>
);

export default Views;
