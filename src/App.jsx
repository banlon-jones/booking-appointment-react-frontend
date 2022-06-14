import React from 'react';
import Nav from './components/navbar/Nav';
import Views from './components/views/Views';
import './App.css';

const App = () => (
  <div>
    <Nav />
    <div className="main-content">
      <Views />
    </div>
  </div>
);

export default App;
