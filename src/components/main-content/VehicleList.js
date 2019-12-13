import React from 'react'
import AddVehicle from './AddVehicle'

import {Container, Row, Col} from 'react-bootstrap'

import { IoIosAddCircleOutline, IoIosCar} from "react-icons/io";
import ItemList from '../reusable-components/ItemList'

class VehicleList extends React.Component {
    render() {
        return (
            <Container className="main-content-container">
                <Row>
                    <Col><h4 id="add-vehicle-title" className="page-text-header">Click below to add vehicle to policy</h4></Col>
                </Row>
                <ItemList 
                    {...this.props} 
                    listItem={this.props.vehicles}
                    modalGlyphAdd={<IoIosAddCircleOutline/>} 
                    modalGlyphExisting={<IoIosCar/>}
                    modalHeading="Add a Vehicle" 
                    modalContent={<AddVehicle addVehicle={this.props.addVehicle} saveVehicle={this.props.saveVehicle} removeVehicle={this.props.removeVehicle}/>} 
                    modalButtonText="Add Vehicle" 
                />
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