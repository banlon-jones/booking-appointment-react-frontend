import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resorts from '../home/Resorts';

const Views = () => {
  return (
    <Routes>
      <Route index element={<Resorts />} />
    </Routes>
  )
}

export default Views