
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { updateFilial } from '../components/filiaisLista';
import '../styles/stylesManage.css';
<link rel="stylesheet" type="text/css" href="styles.css" />


const UpdateFilialModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFilial(props.filial.idFilial, e.target)
            .then((result) => {
                alert(result);
                props.setUpdated(true);
            },
                (error) => {
                    alert("Failed to Update Filial");
                })
    };

    return (
        

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Filial Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup controlId="nomeFilial">
                                    <FormLabel>Nome Filial</FormLabel>
                                    <FormControl type="text" name="nomeFilial" required placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="cidade">
                                    <FormLabel>cidade</FormLabel>
                                    <FormControl type="text" name="cidade" required placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="estado">
                                    <FormLabel>estado</FormLabel>
                                    <FormControl type="text" name="estado" required placeholder="" />
                                </FormGroup>
                                <FormGroup>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </FormGroup>
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
    );
};


export default UpdateFilialModal;