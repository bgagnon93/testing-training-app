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

class DriverBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.addFirstName = this.addFirstName.bind(this)
        this.addLastName = this.addLastName.bind(this)
    }

    addFirstName(firstName) {
        this.setState(prevState => ({
                ...prevState,
                'First Name': firstName
        })
    )}

    addLastName(lastName) {
        this.setState(prevState => ({
                ...prevState,
                'Last Name': lastName
        })
    )}

    render() {
        if(this.props.setDriverState) {
            this.props.addDriver(
                {'Name': `${this.state['First Name']} ${this.state['Last Name']}`}
            )
        }
        return (
            <Container>
                <Row>
                    <Col sm={6} xs={9}><TextField fieldNameHeader="First Name" fieldName="first-name" handleOnBlur={this.addFirstName}/></Col>
                    <Col sm={6} xs={3}><TextField fieldNameHeader="MI" fieldName="middle-name"/></Col>
                    <Col sm={6} xs={9}><TextField fieldNameHeader="Last Name" fieldName="last-name" handleOnBlur={this.addLastName}/></Col>
                    <Col sm={6} xs={9}><TextField fieldNameHeader="Date of Birth" fieldName="date-of-birth"/></Col>
                    <Col sm={6} xs={9}><SelectField options={options} fieldNameHeader="Relation to You" fieldName="relation-to-you"/></Col>
                </Row>
            </Container>
        )
    }
}

class AddDriver extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.addDriver = this.addDriver.bind(this)
    }

    addDriver(driver) {
        this.setState(prevState=> {
            return {
                ...prevState,
                drivers: driver
            }
        })
        this.props.driverStateSet()
        this.props.addDriver(driver)
    }

    render() {
        return (
            <DriverBox setDriverState={this.props.setDriverState} addDriver={this.addDriver}/>
        )
    }
}

export default AddDriver