import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Modal from 'react-bootstrap/Modal'
import ModalComponent from '../reusable-components/Modal'
import AddVehicle from './AddVehicle'
import { IoIosAddCircleOutline } from "react-icons/io";

const addVehicleButton = 
    <div>
        <div className="modal-button-glyph">
            <IoIosAddCircleOutline />
        </div>
        <div className="modal-button-text">Add Vehicle</div>
    </div>

class VehicleList extends React.Component {
    constructor() {
        super()
        this.state = {
            vehicles: []
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><h4 id="add-vehicle-title" className="page-text-header">Click below to add vehicle to policy</h4></Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={4} sm={12}>
                            <ModalComponent
                                modalButton={addVehicleButton}
                                modalHeading="Add a Vehicle" 
                                modalcontent={<AddVehicle />}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>{'\u00A0'}</Col>
                        <Col sm={4}><button type="button" className="btn btn-primary btn-next-page">Next: Add Your Drivers</button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default VehicleList