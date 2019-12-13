import React from 'react'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ModalButton from '../reusable-components/ModalButton'
import ModalComponent from '../reusable-components/Modal'
import ModalFooter from 'react-bootstrap/ModalFooter'

class CustomModalFooter extends React.Component {
    render() {
        return (
            <ModalFooter>
                <Button onClick={() => {
                    this.props.onHide()
                    this.props.handleAdd()
                }}>Save</Button>
                <Button onClick={() => {
                    this.props.onHide()
                }}>Remove</Button>
                <Button onClick={this.props.onHide}>Close</Button>
            </ModalFooter>
        )
    }
}

class ExistingItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {modalShow: false}
        this.updateModalShow = this.updateModalShow.bind(this)
    }

    updateModalShow() {
        this.setState({modalShow: !this.state.modalShow})
    }

    render() {
        return (
            <Col lg={3} md={4} sm={12}>
            <ModalComponent 
                    modalButton={<ModalButton name="add-item" updateModalShow={this.updateModalShow} modalButtonText={this.props.item.Name} modalGlyph={this.props.modalGlyphExisting}/>}
                    modalHeading={this.props.modalHeading}
                    modalContent={React.cloneElement(this.props.modalContent, {setItemState: this.props.setItemState, item: this.props.item, key: this.props.key})}
                    show={this.state.modalShow}
                    updateModalShow={this.updateModalShow}
                    modalOnAdd={this.props.handleAdd}
                    modalFooter={<CustomModalFooter onHide={this.updateModalShow} handleAdd={this.props.handleAdd}/>}
                />
            </Col>
        )
    }
}

export default ExistingItem