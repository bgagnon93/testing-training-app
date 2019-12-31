import React from 'react'
import Modal from 'react-bootstrap/Modal'

class ModalFooter extends React.Component {
    render() {
        if(this.props.newItem) {
            return (
                <Modal.Footer>
                    {this.props.addButton}
                    {this.props.closeButton}
                </Modal.Footer>
            )
        } else if(this.props.editItem === '') {
            return (
                <Modal.Footer>
                    {this.props.saveButton}
                    {this.props.closeButton}
                </Modal.Footer>
            )
        } else {
            return (
                <Modal.Footer>
                    {this.props.editButton}
                    {this.props.removeButton}
                    {this.props.closeButton}
                </Modal.Footer>
            )
        }
    }
}

export default ModalFooter