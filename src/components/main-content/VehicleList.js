import React from 'react'
import AddVehicle from './AddVehicle'

import {Container, Row, Col} from 'react-bootstrap'
import { IoIosAddCircleOutline, IoIosCar} from "react-icons/io";

class VehicleList extends React.Component {
    render() {
        const buttonList = []
        let itemCount = 0
        for(let vehicle of this.props.vehicles) {
            buttonList.push(<Col lg={4} md={6} sm={12} key={vehicle.Name}>
            <AddVehicle {...this.props} item={vehicle} modalButtonText={vehicle.Name} modalGlyph={<IoIosCar/>} count={vehicle.count} newItem={false}/></Col>)
            itemCount = vehicle.count
        }
        buttonList.push(<Col lg={4} md={6} sm={12} key={"New Vehicle " + itemCount+1}>
            <AddVehicle {...this.props} item={{}} modalButtonText="Add Vehicle" modalGlyph={<IoIosAddCircleOutline/>} count={itemCount+1} newItem={true}/></Col>)
        return (
            <Container className="main-content-container">
                <Row>
                    <Col><h4 id="add-vehicle-title" className="page-text-header">Click below to add vehicle to policy</h4></Col>
                </Row>
                <Row>{buttonList}</Row>
                <Row className="next-prev-row">
                    <Col lg={3}  sm={5} xs={6}><button name="previous" type="button" className="btn btn-primary btn-prev-page btn-page-nav" onClick={this.props.previousPage}>Previous: About You</button></Col>
                    <Col lg={6} sm={2} className="d-none d-sm-block">{'\u00A0'}</Col>
                    <Col lg={3} sm={5} xs={6}><button name="next" type="button" className="btn btn-primary btn-next-page btn-page-nav" onClick={this.props.nextPage}>Next: Add Drivers</button></Col>
                </Row>
            </Container>
        )
    }
}

export default VehicleList