// TelaAnalista.js
import React from 'react';
import '../styles/stylesTelaAnalista.css';

const TelaAnalista = () => {
  return (
    <div className="box">
      <div className="welcome-message">
        <h1>Bem-vindo, Analista!</h1>
        <a className="button" href="#">
          Novo Relatório
        </a>
        <a className="button" href="#">
          Log Out
        </a>
      </div>
    </div>
  );
};

export default TelaAnalista;
