import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/stylesSelects.css';

function CidadesPorEstado({ onEstadoChange, onCidadeChange }) {
  const [estados, setEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidades, setCidades] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');

  useEffect(() => {
    // Fazer uma solicitação GET para obter a lista de estados
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        setEstados(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter a lista de estados:', error);
      });
  }, []);

  const handleEstadoChange = (event) => {
    const estado = event.target.value;
    setEstadoSelecionado(estado);
    // Limpar a cidade selecionada quando o estado muda
    setCidadeSelecionada('');

    if (estado) {
      // Fazer uma solicitação GET para obter a lista de municípios do estado selecionado
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        .then((response) => {
          setCidades(response.data);
        })
        .catch((error) => {
          console.error('Erro ao obter a lista de municípios:', error);
        });
    }

    // Chamar a função de callback quando o estado muda
    onEstadoChange(estado);
  };

  // Chamar a função de callback quando a cidade muda
  useEffect(() => {
    onCidadeChange(cidadeSelecionada);
  }, [cidadeSelecionada, onCidadeChange]);

  return (
    <div>
      <label htmlFor="estado" className="text-sm font-medium text-gray-700">
        Estado:
      </label>
      <select
        id="estado"
        name="estado"
        required
        onChange={handleEstadoChange}
        value={estadoSelecionado}
      >
        <option value="">Selecione um estado</option>
        {estados.map((estado) => (
          <option key={estado.sigla} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>
      <label htmlFor="cidade" className="text-sm font-medium text-gray-700">
        Cidade:
      </label>
      <select
        id="cidade"
        name="cidade"
        required
        onChange={(e) => setCidadeSelecionada(e.target.value)}
        value={cidadeSelecionada}
      >
        <option value="">Selecione uma cidade</option>
        {cidades.map((cidade) => (
          <option key={cidade.id} value={cidade.nome}>
            {cidade.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CidadesPorEstado;
