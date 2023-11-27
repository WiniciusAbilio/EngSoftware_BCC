import React, { useState, useEffect } from 'react';
import '../styles/stylesSelects.css';

function SelectSilos() {
  const [data, setData] = useState([]); // Corrigido para usar useState e inicializar com um array vazio
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/listarSilos/', { // ALTERAR ROTA
          method: 'GET'
        });

        if (response.ok) {
          const jsonData = await response.json(); // Renomeado para evitar conflito com a variável data

          setData(jsonData); // Preencha o estado data com os dados da resposta
        }
      } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
      }
    }

    fetchData(); // Chame a função fetchData para buscar os dados

  }, []); // O segundo argumento vazio [] garante que o useEffect seja executado apenas uma vez após a montagem do componente

  // Adicione o console.log para depuração
  useEffect(() => {
    console.log('selectedValue:', selectedValue);
  }, [selectedValue]);

  return (
<div className="select-container" style={{ marginBottom: '1rem' }}>
      <select
        id="selectData"
        name="idSilo"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="custom-select"
        required
      >
        <option value="" disabled>
          Selecione o Silo
        </option>
        {data.map((item) => (
          <option key={item.idSilo} value={item.idSilo}>
            {item.nomeSilo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectSilos;
