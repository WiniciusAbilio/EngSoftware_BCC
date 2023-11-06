import React from 'react';
import '../styles.css';
import SelectFiliais from '../components/selectFiliais';


function cadastroSilo() {
  return (
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" action="http://127.0.0.1:8000/processarCadastroSilo/" method="post">
            <span className="login-form-title">Cadastro de Silo</span>
            <span className="login-form-title">
            </span>
  
            <SelectFiliais/>

            <div className='wrap-input'>
              <input className='input' name='nomeSilo' type='text' placeholder='Nome do Silo' required/>
            </div>
    
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

export default cadastroSilo;
