import React, { useState, useEffect } from "react";
import "../styles.css";
import BotaoLogout from '../components/logout';
import axios from 'axios';

function TelaEspecialista() {
  const [relatorios, setRelatorios] = useState([]);

  useEffect(() => {
    const fetchRelatorios = async () => {
      try {
        const response = await axios.get('http://localhost:8000/listarRelatorio/');
        setRelatorios(response.data.relatorios);
      } catch (error) {
        console.error('Erro ao obter relatórios:', error);
      }
    };

    fetchRelatorios();
  }, []);

  const handleAceitar = (idRelatorio) => {
    // Lógica para aceitar o relatório com o ID idRelatorio
    console.log(`Relatório ${idRelatorio} aceito`);
  };

  const handleRecusar = (idRelatorio) => {
    // Lógica para recusar o relatório com o ID idRelatorio
    console.log(`Relatório ${idRelatorio} recusado`);
  };

  const handleAtualizarRelatorio = async (idRelatorio, status) => {
    try {
        const data = {
            idRelatorio: idRelatorio,
            status: status
        }
      await axios.post(`http://localhost:8000/updateRelatorio/`, data, { status });
      // Atualize a lista de relatórios após a atualização
      const response = await axios.get('http://localhost:8000/listarRelatorio/');
      setRelatorios(response.data.relatorios);
    } catch (error) {
      console.error('Erro ao atualizar relatório:', error);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Relatórios Especialista</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID do Relatório</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Nome do Usuário</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Data de Emissão</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Acurácia</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Filial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Silo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Email do Usuário</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>URL da Foto</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Ações</th>
            {/* Adicione outras colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {relatorios.map(relatorio => (
            <tr key={relatorio.idRelatorio}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.idRelatorio}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.nomeUsuario}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.dataEmissao}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.acuracia}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.filial}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.silo}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.Usuario_email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.urlFoto}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{relatorio.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>

              <button onClick={() => handleAtualizarRelatorio(relatorio.idRelatorio, 'aceito')}>Aceitar</button>
                <button onClick={() => handleAtualizarRelatorio(relatorio.idRelatorio, 'recusado')}>Recusar</button>
</td>
</tr>
))}
</tbody>
</table>

<div className="botoes">
<BotaoLogout />
</div>
</div>
);
}

export default TelaEspecialista;
