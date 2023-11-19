import React from 'react';
import '../styles.css';


function cadastroCidade() {
  return (
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" action={`${process.env.REACT_APP_BACKEND_URL}/processarCadastroCidade/`} method="post">
            <span className="login-form-title">Cadastro de Cidade</span>
            <span className="login-form-title">
            </span>
  
            <div className='wrap-input'>
              <input className='input' name='nomeCidade' type='text' placeholder='Nome da Cidade' required/>
            </div>
            <div className='wrap-input'>
              <input className='input' name='idCidade' type='text' placeholder='id' required/>
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

export default cadastroCidade;
