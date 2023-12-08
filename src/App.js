// App.js
import React from 'react';
import RelatorioAcuracia from './pages/relatorioAcuracia';

const App = () => {
  // Simulação de dados do relatório
  const relatorioData = [
    {
      nomeUsuario: 'John Doe',
      dataEmissao: '2023-01-01',
      acuracia: '95%',
      urlFoto: 'https://example.com/photo.jpg',
      cidade: 'City',
      filial: 'Branch',
      silo: 'Silo',
      Usuario_email: 'john@example.com',
    },
    // Adicione mais dados conforme necessário
  ];

  return (
    <div>
      <h1>Relatório de Acurácia</h1>
      <RelatorioAcuracia relatorioData={relatorioData} />
    </div>
  );
};

export default App;
