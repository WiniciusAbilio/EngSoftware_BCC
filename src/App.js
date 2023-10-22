import React from 'react';
import {Route, Routes } from 'react-router-dom'; // Importe Routes em vez de Switch
import Login from './components/login';

function App() {
  return (
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/" element={<Login />} />
      </Routes>
  );
}

export default App;
