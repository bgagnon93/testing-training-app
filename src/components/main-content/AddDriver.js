import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TextField from '../reusable-components/TextField'
import SelectField from '../reusable-components/SelectField'

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
            'First Name': (item && item['First Name'] ? item['First Name'] : ''),
            'Middle Name': (item && item['Middle Name'] ? item['Middle Name'] : ''),
            'Last Name': (item && item['Last Name'] ? item['Last Name'] : ''),
            'Date of Birth': (item && item['Date of Birth'] ? item['Date of Birth'] : ''),
            'Relation to You': (item && item['Relation to You'] ? item['Relation to You'] : ''),
            'count': this.props.count
        }
        this.addFirstName = this.addFirstName.bind(this)
        this.addLastName = this.addLastName.bind(this)
        this.addDriver = this.addDriver.bind(this)
        this.saveDriver = this.saveDriver.bind(this)
        this.removeDriver = this.removeDriver.bind(this)
    }

    addFirstName(firstName) {
        this.setState({'First Name': firstName})
    }

    addLastName(lastName) {
        this.setState({'Last Name': lastName})
    }

    addDriver(driver) {
        this.props.handleAdd()
        this.props.addDriver(driver)
    }

    saveDriver(driver) {
        this.props.handleAdd()
        this.props.saveDriver(driver)
    }

    removeDriver(driver) {
        this.props.handleAdd()
        this.props.removeDriver(driver)
    }

    render() {
        if(this.props.setItemState) {
            this.addDriver({
                'First Name': this.state['First Name'],
                'Middle Name': this.state['Middle Name'],
                'Last Name': this.state['Last Name'],
                'Date of Birth': this.state['Date of Birth'],
                'Relation to You': this.state['Relation to You'],
                'Name': `${this.state['First Name']} ${this.state['Last Name']}`,
                'count': this.state['count']
            })
        }
        return (
            <Container>
                <Row>
                    <Col sm={6} xs={9}><TextField fieldNameHeader="First Name" fieldName="first-name" handleOnBlur={(e)=>this.setState({'First Name': e})} value={this.props.item['First Name']}/></Col>
                    <Col sm={6} xs={3}><TextField fieldNameHeader="MI" fieldName="middle-name" handleOnBlur={(e)=>this.setState({'Middle Name': e})} value={this.props.item['Middle Name']}/></Col>
                    <Col sm={6} xs={9}><TextField fieldNameHeader="Last Name" fieldName="last-name" handleOnBlur={(e)=>this.setState({'Last Name': e})} value={this.props.item['Last Name']}/></Col>
                    <Col sm={6} xs={9}><TextField fieldNameHeader="Date of Birth" fieldName="date-of-birth" handleOnBlur={(e)=>this.setState({'Date of Birth': e})} value={this.props.item['Date of Birth']}/></Col>
                    <Col sm={6} xs={9}><SelectField options={options} fieldNameHeader="Relation to You" fieldName="relation-to-you" onChange={(e)=>this.setState({'Relation to You': e})} value={this.props.item['Relation to You']}/></Col>
                </Row>
            </Container>
        )
    }
}

export default AddDriver