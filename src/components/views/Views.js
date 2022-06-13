import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resorts from '../home/Resorts';
import LogIn from '../login/LogIn';
import SignUp from '../signup/SignUp';
import Resort from '../resort/Resort';
import AddResort from '../resort/AddResort';
import UpdateResort from '../resort/UpdateResort';

const Views = () => (
  <Routes>
    <Route index element={<Resorts />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/resort-details" element={<Resort />} />
    <Route path="/resort-add" element={<AddResort />} />
    <Route path="/resort-update/:id" element={<UpdateResort />} />
  </Routes>
);

export default Views;
