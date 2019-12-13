import React from 'react'
import { Button } from 'react-bootstrap'


class ModalButton extends React.Component {
    render() {
        return (
            <Button name={this.props.name} variant="light" onClick={this.props.updateModalShow} className={this.props.className ? this.props.className : "modal-button shadow p-3 bg-white rounded active"}>
                <div className="modal-button-glyph">
                    {this.props.modalGlyph}
                </div>
                <div className="modal-button-text">{this.props.modalButtonText}</div>
            </Button>
        )
    }
}

export default ModalButton