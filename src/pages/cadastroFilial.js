// CadastroFilial.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';
import EstadosCidades from '../components/estadosCidades';
import BotaoVoltar from '../components/botaoVoltar';
import { TokenJWT } from '../components/utilsTokenJWT';

function CadastroFilial() {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');

  const onEstadoChange = (estado) => {
    setEstadoSelecionado(estado);
  };

  const onCidadeChange = (cidade) => {
    setCidadeSelecionada(cidade);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      nomeFilial: event.target.nomeFilial.value,
      estado: estadoSelecionado,
      cidade: cidadeSelecionada
    };


    try {
      const response = await axios.post(
        'http://localhost:8000/processarCadastroFilial/',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${TokenJWT}`,
          },
        }
      );

      if (response.status === 200) {
        // Sucesso, redirecione ou faça algo
      } else {
        console.error('Falha ao cadastrar filial. Status:', response.status);
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title">Cadastro de Filial</span>
            <span className="login-form-title"></span>

            <div className="wrap-input">
              <input
                className="input"
                name="nomeFilial"
                type="text"
                placeholder="Nome da Filial"
                required
              />
            </div>

            <EstadosCidades
              onEstadoChange={onEstadoChange}
              onCidadeChange={onCidadeChange}
            />

            <div className="container-login-form-btn">
              <button className="logon-form-btn" type="submit">
                CADASTRAR
              </button>
              <BotaoVoltar />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroFilial;
