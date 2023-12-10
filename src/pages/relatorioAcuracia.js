import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import '../styles/stylesRelatorio.css';

function RelatorioAcuracia() {
  // Defina seus estilos diretamente aqui no JSX
  const tableCellStyle = {
    // Adicione seus estilos aqui
    fontWeight: 'bold',
  };

  return (
    <div className="body">
      <div className="container">
      {/* Seu código JSX aqui */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableCellStyle}>Nome do Usuário</TableCell>
            {/* Outras células da cabeça da tabela */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={tableCellStyle}>Dado do Usuário</TableCell>
            {/* Outras células do corpo da tabela */}
          </TableRow>
        </TableBody>
      </Table>
    </div>
    </div>
  );
}

export default RelatorioAcuracia;
