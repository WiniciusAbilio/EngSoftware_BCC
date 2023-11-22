import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { addFilial } from '../components/filiaisLista';


const AddFilialModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addFilial(e.target)
            .then((result) => {
                alert(result);
                props.setUpdated(true);
            },
                (error) => {
                    alert("Failed to Add Filial");
                })
    }

    return (
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Filial Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nomeFilial">
                                    <Form.Label>Nome Filial</Form.Label>
                                    <Form.Control type="text" name="nomeFilial" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="cidade">
                                    <Form.Label>cidade</Form.Label>
                                    <Form.Control type="text" name="cidade" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="estado">
                                    <Form.Label>estado</Form.Label>
                                    <Form.Control type="text" name="estado" required placeholder="" />
                                </Form.Group>
                                <Form.Group>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddFilialModal;