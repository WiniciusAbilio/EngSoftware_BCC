import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectFiliais from '../components/selectFiliais';

import '../styles.css';

function CadastroSilo() {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleCadastroConcluido = (event) => {
    event.preventDefault();

    // Adicione validações adicionais conforme necessário
    // Exemplo: verificar se o nome do Silo foi preenchido
    const nomeSilo = event.target.elements.nomeSilo.value;
    if (!nomeSilo) {
      toast.error('Por favor, preencha todos os campos antes de cadastrar.');
      return;
    }

    // Se todos os campos foram preenchidos, exiba a mensagem de sucesso
    toast.success('Cadastro de Silo concluído com sucesso!');
    setFormularioEnviado(true);
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form
            className="login-form"
            action="http://127.0.0.1:8000/processarCadastroSilo/"
            method="post"
            onSubmit={handleCadastroConcluido}
          >
            <span className="login-form-title">Cadastro de Silo</span>
            <SelectFiliais />

            <div className='wrap-input'>
              <input
                className='input'
                name='nomeSilo'
                type='text'
                placeholder='Nome do Silo'
                required
              />
            </div>

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
                <p>Cadastro de Silo concluído com sucesso!</p>
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

export default CadastroSilo;
