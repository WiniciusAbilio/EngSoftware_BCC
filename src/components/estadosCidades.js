import React, { useState, useEffect } from 'react';
import '../styles.css';



function CidadesPorEstado() {
  const [estados, setEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidades, setCidades] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');

  useEffect(() => {
    // Fazer uma solicitação GET para obter a lista de estados usando Fetch
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => response.json())
      .then((data) => {
        setEstados(data);
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
      // Fazer uma solicitação GET para obter a lista de municípios do estado selecionado usando Fetch
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        .then((response) => response.json())
        .then((data) => {
          setCidades(data);
        })
        .catch((error) => {
          console.error('Erro ao obter a lista de municípios:', error);
        });
    }
  };

  return (
<div>
      <div style={{ marginBottom: '1rem' }}>
        <select
          id="estado"
          name="estado"
          required
          className={`mt-1 custom-select`}
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
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <select
          id="cidade"
          name="cidade"
          required
          className={`mt-1 custom-select`}
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
    </div>
  );
}

export default CidadesPorEstado;
