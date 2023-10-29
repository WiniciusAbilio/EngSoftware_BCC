import React from 'react';
import '../styles.css';


function cadastrar() {
  return (
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" action="http://127.0.0.1:8000/processarLogin/" method="post">
            <span className="login-form-title">Cadastro de Usuário</span>
            <span className="login-form-title">
            </span>

            <div className='wrap-input'>
              <input className='input' name='email' type='email' placeholder='Email' />
            </div>
  
            <div className='wrap-input'>
              <input className='input' name='nome' type='text' placeholder='Name' />
            </div>

            <div className='wrap-input'>
              <input className='input' name='password' type='password' placeholder='Password' />
            </div>

          <div className='wrap-input'>
         <select className='input' name='tipoUsuario'>
          <option value='normal'>Normal</option>
           <option value='especialista'>Especialista</option>
             <option value='admin'>Admin</option>
           </select>
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

export default cadastrar;
