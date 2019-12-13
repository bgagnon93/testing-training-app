import React from 'react'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

class MyVerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.modalHeading}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.modalContent}
                </Modal.Body>
                {this.props.modalFooter}
            </Modal>
        )
    }
}

class ModalComponent extends React.Component {
    render() {
        return (
            <ButtonToolbar>
                {this.props.modalButton}
                <MyVerticallyCenteredModal
                    {...this.props}
                    onHide={this.props.updateModalShow}
                />
            </ButtonToolbar>
        )
    }
}

export default ModalComponent;