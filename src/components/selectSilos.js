import React, { useState, useEffect } from 'react';
import '../styles/stylesSelects.css';
import { TokenJWT } from './utilsTokenJWT';

function SelectSilos() {
  const [filialId, setFilialId] = useState('');
  const [silos, setSilos] = useState([]);
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
          setSilos(jsonData.silos);  // Ajustado para jsonData.silos
        }
      } catch (error) {
        console.error('Erro ao processar a solicitação de silos:', error);
      }
    }
  
    fetchSilos();
  }, []);
  
  const handleFilialChange = (event) => {
    const selectedFilialId = event.target.value;
    setFilialId(selectedFilialId);
    setSelectedFilial(selectedFilialId);
  };
  
  const handleSiloChange = (event) => {
    const selectedSiloId = event.target.value;
    setSelectedSilo(selectedSiloId);
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
          {silos.map((silo) => (
            <option key={silo.idFilial} value={silo.idFilial}>
              {silo.nomeFilial}
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
          {silos
            .filter((silo) => silo.idFilial === filialId)  // Filtrado com base no filialId
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
