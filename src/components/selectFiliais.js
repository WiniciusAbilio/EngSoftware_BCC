import React, { useState, useEffect } from 'react';
import '../styles/stylesSelects.css';

function SelectFiliais() {
  const [data, setData] = useState([]); // Corrigido para usar useState e inicializar com um array vazio
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/listarFiliais/', {
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
    <div>
      <select id="selectData" name= "idFilial" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
        {data.map(item => (
          <option key={item.idFilial} value={item.idFilial}>
            {item.nomeFilial}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectFiliais;
