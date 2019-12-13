import React from 'react'
import AddVehicle from './AddVehicle'

import {Container, Row, Col} from 'react-bootstrap'
import { IoIosAddCircleOutline, IoIosCar} from "react-icons/io";

class VehicleList extends React.Component {
    render() {
        const buttonList = []
        let itemCount = 0
        for(let vehicle of this.props.vehicles) {
            buttonList.push(<Col lg={3} md={4} sm={12}>
            <AddVehicle {...this.props} item={vehicle} modalButtonText={vehicle.Name} modalGlyph={<IoIosCar/>} count={itemCount++} newItem={false}/></Col>)
        }
        buttonList.push(<Col lg={3} md={4} sm={12}>
            <AddVehicle {...this.props} item={{}} modalButtonText="Add Vehicle" modalGlyph={<IoIosAddCircleOutline/>} count={itemCount++} newItem={true}/></Col>)
        return (
            <Container className="main-content-container">
                <Row>
                    <Col><h4 id="add-vehicle-title" className="page-text-header">Click below to add vehicle to policy</h4></Col>
                </Row>
                <Row>{buttonList}</Row>
                <Row className="next-prev-row">
                    <Col sm={4}><button name="previous" type="button" className="btn btn-primary btn-prev-page" onClick={this.props.previousPage}>Previous: About You</button></Col>
                    <Col sm={4}>{'\u00A0'}</Col>
                    <Col sm={4}><button name="next" type="button" className="btn btn-primary btn-next-page" onClick={this.props.nextPage}>Next: Add Drivers</button></Col>
                </Row>
            </Container>
        )
    }
}

export default VehicleList