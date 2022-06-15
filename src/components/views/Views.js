import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resorts from '../home/Resorts';
import LogIn from '../login/LogIn';
import SignUp from '../signup/SignUp';
import ResortDetails from '../resort/ResortDetails';
import AddResort from '../resort/AddResort';
import UpdateResort from '../resort/UpdateResort';
import Reservations from '../reservations/Reservations';
import CreateReservation from '../../createReservation/CreateReversation';
import ResortsToDelete from '../home/ResortsToDelete';

const Views = () => (
  <Routes>
    <Route index element={<Resorts />} />
    <Route path="/resorts" element={<Resorts />} />
    <Route path="/deleteResorts" element={<ResortsToDelete />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/resorts/:resortId" element={<ResortDetails />} />
    <Route path="/additem" element={<AddResort />} />
    <Route path="/resorts/update/:updateId" element={<UpdateResort />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/reserve" element={<CreateReservation />} />
  </Routes>
);

export default Views;
