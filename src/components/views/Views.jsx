import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resorts from '../home/Resorts';
import ResortDetails from '../home/ResortDetails';
import LogIn from '../login/LogIn';
import SignUp from '../signup/SignUp';

const Views = () => (
  <Routes>
    <Route index element={<Resorts />} />
    <Route path="/resorts" element={<Resorts />} />
    <Route path="/resorts/:id" element={<ResortDetails />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
  </Routes>
);

export default Views;
