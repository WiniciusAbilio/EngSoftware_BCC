import React from 'react';
import aaIMG from '../assets/aa.png';
import '../styles.css';


function Login() {
  return (
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" action="/processarLogin" method="post">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              {/* Coloque aqui a imagem do seu logotipo */}
              <img src={aaIMG} alt="hihi"/>
            </span>

            <div className='wrap-input'>
              <input className='input' type='email' placeholder='Email' />
            </div>

            <div className='wrap-input'>
              <input className='input' type='password' placeholder='Password' />
            </div>

            <div className='container-login-form-btn'>
              <button className='logon-form-btn' type='submit'>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
