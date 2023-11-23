import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import CadastroUsuario from './pages/cadastroUsuario';
import CadastroFilial from './pages/cadastroFilial';
import CadastroSilo from './pages/cadastroSilo';
import ListarFiliais from './pages/listaFiliais';
import TelaAdm from './pages/telaAdm';
import ManageFilial from "./pages/manageFilial";


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
    window.location.pathname = '/telaAdm'
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
          <Route path="/telaAdm" element={<TelaAdm />} />
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          <Route path="/cadastroFilial" element={<CadastroFilial />} />
          <Route path="/cadastroSilo" element={<CadastroSilo />} />
          <Route path="/listarFiliais" element={<ListarFiliais/>} />
          <Route path="/manageFilial" element={<ManageFilial/>} />App

      
        </>
      )}
      {userRole === 'especialista' && (<></>)}
      {userRole === 'normal' && (<></>)}
    </Routes>
  );
}

export default App;
