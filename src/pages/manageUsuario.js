import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getUsuarios, deleteUsuario } from "../components/usuariosLista";
import UpdateUsuarioModal from "./updateUsuarioModal";

import '../styles/stylesManage.css';
<link rel="stylesheet" type="text/css" href="styles.css" />

const ManageUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editUsuario, setEditUsuario] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (usuarios.length && !isUpdated) {
            return;
        }
        getUsuarios()
            .then(data => {
                if (mounted) {
                    setUsuarios(data);
                }
            })
        return () => {
            mounted = false;
            setIsUpdated(false);
        }
    }, [isUpdated, usuarios])

    const handleUpdate = (e, user) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditUsuario(user);
    };

    const handleDelete = (e, idUsuario) => {
        if (window.confirm('Are you sure ?')) {
            e.preventDefault();
            deleteUsuario(idUsuario)
                .then((result) => {
                    alert(result);
                    setIsUpdated(true);
                },
                    (error) => {
                        alert("Failed to Delete Usuario");
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
                            <th>Nome Usuario</th>
                            <th>Email</th>
                            <th>Tipo Usuário</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((user) =>

                            <tr key={user.idUsuario}>
                                <td>{user.idUsuario}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.tipoUsuario}</td>
                                <td>

                                    <Button className="mr-2" variant="danger"
                                        onClick={event => handleDelete(event, user.idUsuario)}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button className="mr-2"
                                        onClick={event => handleUpdate(event, user)}>
                                        <FaEdit />
                                    </Button>
                                    <UpdateUsuarioModal show={editModalShow} usuario={editUsuario}  
                                        onHide={EditModelClose}></UpdateUsuarioModal>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        </div>
    );

};
export default ManageUsuario;