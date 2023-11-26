import React from 'react';
import { Link } from 'react-router-dom'; // Importe a funcionalidade de Link para criar links

import '../styles/stylesTelaAdm.css';

function TelaAdm() {
  return (
    <div className="container">
      <div className="container-adm">
        <div className="wrap-adm">
         <h1>Bem Vindo!</h1> 
          <div className='container-login-form-btn'>
            <Link to='/cadastroUsuario'> {/* Use o componente Link para navegação */}
              <button className='logon-form-btn'>
                CADASTRAR USUÁRIO
              </button>
            </Link>
          </div>

          <div className='container-login-form-btn'>
            <Link to='/cadastroFilial'>
              <button className='logon-form-btn'>
                CADASTRAR FILIAL
              </button>
            </Link>
          </div>

          <div className='container-login-form-btn'>
            <Link to='/cadastroSilo'>
              <button className='logon-form-btn'>
                CADASTRAR SILO
              </button>
            </Link>
          </div>

          <div className='container-login-form-btn'>
            <Link to='/manageUsuario'>
              <button className='logon-form-btn'>
                EDITAR USUÁRIO
              </button>
            </Link>
          </div>

          <div className='container-login-form-btn'>
            <Link to='/manageFilial'>
              <button className='logon-form-btn'>
                EDITAR FILIAL
              </button>
            </Link>
          </div>

          <div className='container-login-form-btn'>
            <Link to='/manageSilo'>
              <button className='logon-form-btn'>
                EDITAR SILO
              </button>
            </Link>
          </div>

          <div className='container-login-form-btn'>
            <Link to='/cadastroSilo'>
              <button className='logon-form-btn'>
                LOG OUT
              </button>
            </Link>
          </div>

       
        </div>
      </div>
    </div>
  );
}

export default TelaAdm;
