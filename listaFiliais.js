import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getFiliais } from '../components/filiaisLista';
import '../styles.css';

const Filiais = () => {
  const [filiais, setFiliais] = useState([]);

  useEffect(() => {
   let mounted = true;
   getFiliais()
     .then(data => {
       if(mounted) {
         setFiliais(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Nome Filial</th>
            <th>Cidade</th>
            <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            {filiais.map((fil) =>
            <tr key={fil.id}>
                <td>{fil.idFilial}</td>
                <td>{fil.nomeFilial}</td>
                <td>{fil.cidade}</td>
                <td>{fil.estado}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Filiais;