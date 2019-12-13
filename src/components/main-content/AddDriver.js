import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

import TextField from '../reusable-components/TextField'
import SelectField from '../reusable-components/SelectField'
import ModalButton from '../reusable-components/ModalButton'

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
            'count': this.props.count
        }
        this.addDriver = this.addDriver.bind(this)
        this.saveDriver = this.saveDriver.bind(this)
        this.removeDriver = this.removeDriver.bind(this)
    }

    addDriver() {
        this.setState({'Name': `${this.state['First Name']} ${this.state['Last Name']}`}, ()=>{this.props.addDriver(this.state)})
    }

    saveDriver() {
        this.setState({'Name': `${this.state['First Name']} ${this.state['Last Name']}`}, ()=>{this.props.saveDriver(this.state)})
    }

    removeDriver(driver) {
        this.props.removeDriver(driver)
    }

    render() {
        let modalFooter
        if(this.props.newItem === true) {
            modalFooter = 
            <Modal.Footer>
                <Button onClick={() => {
                    this.setState({modalShow: false})
                    this.addDriver()
                }}>Add</Button>
                <Button onClick={() => this.setState({modalShow: false})}>Close</Button>
            </Modal.Footer>
        } else {
            modalFooter = 
            <Modal.Footer>
                <Button onClick={() => {
                    this.setState({modalShow: false})
                    this.saveDriver()
                }}>Save</Button>
                <Button onClick={() => {
                    this.setState({modalShow: false})
                    this.removeDriver()
                }}>Remove</Button>
                <Button onClick={() => this.setState({modalShow: false})}>Close</Button>
            </Modal.Footer>
        }

        return (
            <ButtonToolbar>
                <ModalButton name="add-item" updateModalShow={() => this.setState({modalShow: true})} modalButtonText={this.props.modalButtonText} modalGlyph={this.props.modalGlyph}/>
                <Modal
                    show={this.state.modalShow}
                    onHide={() => this.setState({modalShow: false})}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">Add a Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col sm={6} xs={9}><TextField fieldNameHeader="First Name" fieldName="first-name" handleOnBlur={(e)=>this.setState({'First Name': e})} value={this.props.item['First Name']}/></Col>
                                <Col sm={6} xs={3}><TextField fieldNameHeader="MI" fieldName="middle-name" handleOnBlur={(e)=>this.setState({'Middle Name': e})} value={this.props.item['Middle Name']}/></Col>
                                <Col sm={6} xs={9}><TextField fieldNameHeader="Last Name" fieldName="last-name" handleOnBlur={(e)=>this.setState({'Last Name': e})} value={this.props.item['Last Name']}/></Col>
                                <Col sm={6} xs={9}><TextField fieldNameHeader="Date of Birth" fieldName="date-of-birth" handleOnBlur={(e)=>this.setState({'Date of Birth': e})} value={this.props.item['Date of Birth']}/></Col>
                                <Col sm={6} xs={9}><SelectField options={options} fieldNameHeader="Relation to You" fieldName="relation-to-you" onChange={(e)=>this.setState({'Relation to You': e})} value={this.props.item['Relation to You']}/></Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    {modalFooter}
                </Modal>
            </ButtonToolbar>
        )
    }
}

export default AddDriver