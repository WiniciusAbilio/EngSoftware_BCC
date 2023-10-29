import React from 'react';
import {Route, Routes } from 'react-router-dom'; // Importe Routes em vez de Switch
import Cadastrar from './components/cadastrar';

function App() {
  return (
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/" element={<Cadastrar />} />
      </Routes>
  );
}

export default App;
