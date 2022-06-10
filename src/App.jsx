import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Views from './components/views/Views';

const App = () => (
    <Routes>
      { <Route path='/' element={<Nav />}/>}
      { <Route path='/' element={<Views />} /> }
      {/* <Route exact path='/main' element={<Main />} /> */}
      {/* <Route exact path='/myreservations' element={<MyReservations />} /> */}
      {/* <Route exact path='/addItem' element={<AddItem />} /> */}
      {/* <Route exact path='/deleteItem' element={<DeleteItem />} /> */}
      {/* <Route exact path='/reserve' element={<ReserveItem />} /> */}
    </Routes>
);

export default App;
