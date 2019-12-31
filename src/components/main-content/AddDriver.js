import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

import TextField from '../reusable-components/TextField'
import SelectField from '../reusable-components/SelectField'
import ModalButton from '../reusable-components/ModalButton'
import ModalFooter from '../reusable-components/ModalFooter'

const options = [
    { value: 'spouse', label: 'Spouse' },
    { value: 'child', label: 'Child' },
    { value: 'parent', label: 'Parent' },
    { value: 'other-relative', label: 'Other Relative' },
    { value: 'other-non-related', label: 'Other Non-Related' },
    { value: 'domestic-partner', label: 'Domestic Partner' }
]

class AddDriver extends React.Component {
    constructor(props) {
        super(props)
        let item = this.props.item
        this.state = {
            modalShow: false,
            'First Name': (item && item['First Name'] ? item['First Name'] : ''),
            'Middle Name': (item && item['Middle Name'] ? item['Middle Name'] : ''),
            'Last Name': (item && item['Last Name'] ? item['Last Name'] : ''),
            'Date of Birth': (item && item['Date of Birth'] ? item['Date of Birth'] : ''),
            'Relation to You': (item && item['Relation to You'] ? item['Relation to You'] : ''),
            'Name': (item && item['Name'] ? item['Name'] : ''),
            'count': this.props.count,
            'edit': (item && item['edit'] ? item['edit'] : '')
        }
        this.addDriver = this.addDriver.bind(this)
        this.saveDriver = this.saveDriver.bind(this)
        this.removeDriver = this.removeDriver.bind(this)
        this.close = this.close.bind(this)
    }

    addDriver() {
        this.setState(prevState => {
            return {
                ...prevState,
                modalShow: false,
                'edit': 'disabled',
                'Name': `${this.state['First Name']} ${this.state['Last Name']}`
            }
        }, ()=>{this.props.addDriver(this.state)})
    }

    editDriver() {
        this.setState({'edit': ''})
    }

    saveDriver() {
        this.setState({modalShow: false})
        this.setState({'edit': 'disabled'})
        this.setState({'Name': `${this.state['First Name']} ${this.state['Last Name']}`}, ()=>{this.props.saveDriver(this.state)})
    }

    removeDriver() {
        this.setState({modalShow: false})
        this.props.removeDriver(this.state)
    }

    close() {
        this.setState({modalShow: false})
        if(!this.props.newItem)
            this.setState({'edit': 'disabled'})
    }

    addButton = <Button onClick={() => this.addDriver()}>Add</Button>
    saveButton = <Button onClick={() => this.saveDriver()}>Save</Button>
    editButton = <Button onClick={() => this.editDriver()}>Edit</Button>
    closeButton = <Button onClick={() => this.close()}>Close</Button>
    removeButton = <Button onClick={() => this.removeDriver()}>Remove</Button>


    render() {
        return (
            <ButtonToolbar>
                <ModalButton name="add-item" updateModalShow={() => this.setState({modalShow: true})} modalButtonText={this.props.modalButtonText} modalGlyph={this.props.modalGlyph}/>
                <Modal
                    show={this.state.modalShow}
                    onHide={() => this.close()}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">Add a Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md={6} xs={6}><TextField fieldNameHeader="First Name" fieldName="first-name" handleOnBlur={(e)=>this.setState({'First Name': e})} value={this.props.item['First Name']} disabled={this.state.edit}/></Col>
                                <Col md={6} className="d-none d-md-block"><TextField fieldNameHeader="MI" fieldName="middle-name" handleOnBlur={(e)=>this.setState({'Middle Name': e})} value={this.props.item['Middle Name']} disabled={this.state.edit}/></Col>
                                <Col md={6} xs={6}><TextField fieldNameHeader="Last Name" fieldName="last-name" handleOnBlur={(e)=>this.setState({'Last Name': e})} value={this.props.item['Last Name']} disabled={this.state.edit}/></Col>
                                <Col md={6} xs={6}><TextField fieldNameHeader="Date of Birth" fieldName="date-of-birth" handleOnBlur={(e)=>this.setState({'Date of Birth': e})} value={this.props.item['Date of Birth']} disabled={this.state.edit}/></Col>
                                <Col md={6} xs={6}><SelectField options={options} fieldNameHeader="Relation to You" fieldName="relation-to-you" onChange={(e)=>this.setState({'Relation to You': e})} value={this.props.item['Relation to You']} disabled={this.state.edit}/></Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <ModalFooter newItem={this.props.newItem} editItem={this.state.edit} addButton={this.addButton} editButton={this.editButton} saveButton={this.saveButton} removeButton={this.removeButton} closeButton={this.closeButton}/>
                </Modal>
            </ButtonToolbar>
        )
    }
}

export default AddDriver