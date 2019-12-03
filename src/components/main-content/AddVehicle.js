import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SelectField from '../reusable-components/SelectField'
import VehicleDetails from './VehicleDetails'

class AddVehicle extends React.Component {

    render() {
        const options = [
            { value: 'car', label: 'Car/SUV/Pickup/Van' },
            { value: 'motor-home', label: 'Motor Home' },
            { value: 'travel-trailer', label: 'Travel Trailer' },
            { value: 'utility-trailer', label: 'Utility Trailer' }
        ]

        return (
            <Container>
                <Row>
                    <Col>
                        <SelectField options={options} fieldNameHeader="What type of vehicle would you like to add?" fieldName="vehicle-type"/>
                    </Col>
                    <Col sm={12}><hr/></Col>
                    <Col>
                        <VehicleDetails />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddVehicle