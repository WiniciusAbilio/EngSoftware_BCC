import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import CadastroUsuario from './components/cadastroUsuario';
import CadastroCidade from './components/cadastroCidade';
import CadastroFilial from './components/cadastroFilial';
import CadastroSilo from './components/cadastroSilo';

function checkUserRole() {
  const token = localStorage.getItem('token');
  if (token) {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = atob(payloadBase64);
    const payload = JSON.parse(decodedPayload);
    return payload.usuario_tipo;
  }
  return null;
}

function RedirecionamentoPadrao() {

  const userRole = checkUserRole();

  if (userRole === 'admin') {
    window.location.pathname = '/cadastroUsuario'
  } else if (userRole === 'especialista') {
    window.location.pathname = '/outraRota'
  }
  return null;
}

function App() {
  const userRole = checkUserRole();

  return (
    <Routes>
      <Route path="/redirecionamentoPadrao" element={<RedirecionamentoPadrao />} />
      <Route path="/" element={userRole ? <Navigate to="/redirecionamentoPadrao" replace={true} /> : <Login />} />
      {userRole === 'admin' && (
        <>
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          <Route path="/cadastroCidade" element={<CadastroCidade />} />
          <Route path="/cadastroFilial" element={<CadastroFilial />} />
          <Route path="/cadastroSilo" element={<CadastroSilo />} />
        </>
      )}
      {userRole === 'especialista' && (<></>)}
      {userRole === 'normal' && (<></>)}
    </Routes>
  );
}

export default App;
