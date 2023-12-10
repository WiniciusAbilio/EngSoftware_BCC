// App.js
import React, { useState } from 'react';
import ApprovalScreen from './ApprovalScreen';
import './styles.css';

const App = () => {
  const [reports, setReports] = useState([
    { content: 'Relatório 1' },
    { content: 'Relatório 2' },
    // Adicione mais relatórios conforme necessário
  ]);

  const handleApprove = (index) => {
    alert(`Relatório ${index + 1} aprovado!`); // Adicione a lógica de aprovação aqui
    // Atualize o estado para refletir a aprovação
    const updatedReports = [...reports];
    updatedReports[index].approved = true;
    setReports(updatedReports);
  };

  const handleReject = (index) => {
    alert(`Relatório ${index + 1} rejeitado!`); // Adicione a lógica de rejeição aqui
    // Atualize o estado para refletir a rejeição
    const updatedReports = [...reports];
    updatedReports[index].rejected = true;
    setReports(updatedReports);
  };

  return <ApprovalScreen reports={reports} onApprove={handleApprove} onReject={handleReject} />;
};

export default App;
