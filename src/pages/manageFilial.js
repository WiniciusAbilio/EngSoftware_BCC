import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getFiliais, deleteFilial } from "../components/filiaisLista";
import UpdateFilialModal from "./updateFilialModal";

import '../styles/stylesManage.css';
<link rel="stylesheet" type="text/css" href="styles.css" />

const ManageFilial = () => {
    const [filiais, setFiliais] = useState([]);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editFilial, setEditFilial] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (filiais.length && !isUpdated) {
            return;
        }
        getFiliais()
            .then(data => {
                if (mounted) {
                    setFiliais(data);
                }
            })
        return () => {
            mounted = false;
            setIsUpdated(false);
        }
    }, [isUpdated, filiais])

    const handleUpdate = (e, fil) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditFilial(fil);
    };

    const handleDelete = (e, idFilial) => {
        if (window.confirm('Are you sure ?')) {
            e.preventDefault();
            deleteFilial(idFilial)
                .then((result) => {
                    alert(result);
                    setIsUpdated(true);
                },
                    (error) => {
                        alert("Failed to Delete Filial");
                    })
        }
    };


    let EditModelClose = () => setEditModalShow(false);

    return (
        <div className="container-fluid side-container">
            <div className="row side-row" >
                <p id="manage"></p>
                <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome Filial</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filiais.map((fil) =>

                            <tr key={fil.idFilial}>
                                <td>{fil.idFilial}</td>
                                <td>{fil.nomeFilial}</td>
                                <td>{fil.cidade}</td>
                                <td>{fil.estado}</td>
                                <td>

                                    <Button className="mr-2" variant="danger"
                                        onClick={event => handleDelete(event, fil.idFilial)}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button className="mr-2"
                                        onClick={event => handleUpdate(event, fil)}>
                                        <FaEdit />
                                    </Button>
                                    <UpdateFilialModal show={editModalShow} filial={editFilial}  
                                        onHide={EditModelClose}></UpdateFilialModal>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        </div>
    );

};
export default ManageFilial;