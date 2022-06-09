import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resorts from '../home/Resorts';
import SignUp from '../signup/SignUp';

const Views = () => (
  <Routes>
    <Route index element={<Resorts />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>
);

export default Views;
