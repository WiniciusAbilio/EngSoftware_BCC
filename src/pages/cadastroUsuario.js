import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TokenJWT from '../components/tokenJWT';

import '../styles.css';

function CadastroUsuario() {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleCadastroConcluido = (event) => {
    event.preventDefault();

    // Adicione validações adicionais conforme necessário
    // Exemplo: verificar se todos os campos foram preenchidos corretamente
    const email = event.target.elements.email.value;
    const nome = event.target.elements.nome.value;
    const password = event.target.elements.password.value;

    if (!email || !nome || !password) {
      toast.error('Por favor, preencha todos os campos antes de cadastrar.');
      return;
    }

    // Se todos os campos foram preenchidos, exiba a mensagem de sucesso
    toast.success('Cadastro de Usuário concluído com sucesso!');
    setFormularioEnviado(true);
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form
            className="login-form"
            action="http://127.0.0.1:8000/processarCadastroUsuario/"
            method="post"
            onSubmit={handleCadastroConcluido}
          >
            <span className="login-form-title">Cadastro de Usuário</span>

            <div className='wrap-input'>
              <input
                className='input'
                name='email'
                type='email'
                placeholder='Email'
                required
              />
            </div>

            <div className='wrap-input'>
              <input
                className='input'
                name='nome'
                type='text'
                placeholder='Nome'
                required
              />
            </div>

            <div className='wrap-input'>
              <input
                className='input'
                name='password'
                type='password'
                placeholder='Senha'
                required
              />
            </div>

            <div className='wrap-input'>
              <select className='input' name='tipoUsuario'>
                <option value='normal'>Normal</option>
                <option value='especialista'>Especialista</option>
                <option value='admin'>Admin</option>
              </select>
            </div>

            <TokenJWT />

            <div className='container-login-form-btn'>
              <button className='logon-form-btn' type='submit'>
                CADASTRAR
              </button>
            </div>
          </form>

          {/* Adicionando o botão de voltar */}
          <div className='container-login-form-btn'>
            <Link to="/">
              <button className='logon-form-btn'>
                <span>&#8592;</span> Voltar
              </button>
            </Link>
          </div>

          {/* ToastContainer para exibir a mensagem de cadastro concluído */}
          {formularioEnviado && (
            <div className="popup-container">
              <div className="popup">
                <p>Cadastro de Usuário concluído com sucesso!</p>
                <button onClick={() => setFormularioEnviado(false)}>
                  Fechar Popup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ToastContainer para exibir a mensagem de teste bem-sucedido */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default CadastroUsuario;
