import React from 'react';
import '../styles.css';
import EstadosCidades from '../components/estadosCidades';

function cadastroFilial() {
  return (
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" action="http://127.0.0.1:8000/processarCadastroFilial/" method="post">
            <span className="login-form-title">Cadastro de Filial</span>
            <span className="login-form-title">
            </span>
  
            <div className='wrap-input'>
              <input className='input' name='nomeFilial' type='text' placeholder='Nome da Filial' required/>
            </div>
            
            <EstadosCidades/>
            
            <div className='container-login-form-btn'>
              <button className='logon-form-btn' type='submit'>
                CADASTRAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default cadastroFilial;
