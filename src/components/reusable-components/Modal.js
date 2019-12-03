import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import {Modal, Button, ButtonToolbar} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.heading}
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {props.modalcontent}
    </Modal.Body>
    <Modal.Footer>
        {<Button onClick={() => {
            props.onHide()
            props.modalOnAdd()
        }}>Add</Button>}
        <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
);
}

function ModalComponent(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <ButtonToolbar>
            
        <Button variant="light" className="modal-button shadow p-3 bg-white rounded" onClick={() => setModalShow(true)}>
            {props.modalButton}
        </Button>

        <MyVerticallyCenteredModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            modalOnAdd={props.modalOnAdd}
            modalcontent={props.modalcontent}
            heading={props.modalHeading}
        />
        </ButtonToolbar>
    );
}

export default ModalComponent;