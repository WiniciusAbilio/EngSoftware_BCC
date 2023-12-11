import React from 'react';
import axios from 'axios';
import '../styles.css';
import { TokenJWT } from '../components/utilsTokenJWT';
import BotaoVoltar from '../components/botaoVoltar';
import SelectFiliais from '../components/selectFiliais';

function CriarRelatorio() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const config = {
      headers: {
        'Authorization': `${TokenJWT}`, // Adicione o token JWT ao cabeçalho
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/processarCriarRelatorio/', formData, config);

      if (response.status === 200) {
        window.location.pathname = '/telaAnalista'
        console.log('Usuário cadastrado com sucesso!');
      } else {
        // A resposta foi um erro
        console.error('Falha ao cadastrar usuário. Status:', response.status);
      }
    } catch (error) {
      // Ocorreu um erro ao enviar a solicitação
      console.error('Erro ao enviar solicitação:', error);
    }
  };

  return (
    <div className="container">
        <SelectFiliais/>
    </div>
  );
}

export default CriarRelatorio;
