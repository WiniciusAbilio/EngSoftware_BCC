import React, { useState, useEffect } from 'react';
import '../styles/stylesSelects.css';
import { TokenJWT } from './utilsTokenJWT';

function SelectSilos({ onFilialChange, onSiloChange }) {
  const [filiaisESilos, setFiliaisESilos] = useState([]);
  const [selectedFilial, setSelectedFilial] = useState('');
  const [selectedSilo, setSelectedSilo] = useState('');

  useEffect(() => {
    async function fetchSilos() {
      try {
        const response = await fetch('http://localhost:8000/listarSilo/', {
          method: 'GET',
          headers: {
            'Authorization': `${TokenJWT}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          setFiliaisESilos(jsonData.silos);
        }
      } catch (error) {
        console.error('Erro ao processar a solicitação de silos:', error);
      }
    }

    fetchSilos();
  }, []);

  const handleFilialChange = (event) => {
    const selectedFilialId = event.target.value;
    setSelectedFilial(selectedFilialId);
    setSelectedSilo(''); // Limpar o silo selecionado ao mudar a filial
    onFilialChange(event); // Passar o evento diretamente para a função pai
  };

  const handleSiloChange = (event) => {
    const selectedSiloId = event.target.value;
    setSelectedSilo(selectedSiloId);
    onSiloChange(event); // Passar o evento diretamente para a função pai
  };

  return (
    <div>
      {/* Select de Filiais */}
      <div className="select-container" style={{ marginBottom: '1rem' }}>
        <select
          id="selectFiliais"
          name="idFilial"
          value={selectedFilial}
          onChange={handleFilialChange}
          className="custom-select"
          required
        >
          <option value="" disabled>
            Selecione a Filial
          </option>
          {filiaisESilos.map((item) => (
            <option key={item.idFilial} value={item.idFilial}>
              {item.nomeFilial}
            </option>
          ))}
        </select>
      </div>

      {/* Select de Silos */}
      <div className="select-container" style={{ marginBottom: '1rem' }}>
        <select
          id="selectSilos"
          name="idSilo"
          value={selectedSilo}
          onChange={handleSiloChange}
          className="custom-select"
          required
        >
          <option value="" disabled>
            Selecione o Silo
          </option>
          {filiaisESilos
            .filter((silo) => silo.idFilial.toString() === selectedFilial.toString())
            .map((silo) => (
              <option key={silo.idSilo} value={silo.idSilo}>
                {silo.nomeSilo}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default SelectSilos;
