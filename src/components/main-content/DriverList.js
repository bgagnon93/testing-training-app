import React from 'react'
import AddDriver from './AddDriver'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoIosAddCircleOutline } from "react-icons/io";
import ModalComponent from '../reusable-components/Modal'

const addDriverButton = 
    <div>
        <div className="modal-button-glyph">
            <IoIosAddCircleOutline />
        </div>
        <div className="modal-button-text">Add Driver</div>
    </div>

class AddDriverComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setDriverState: false,
            drivers: []
        }
        this.handleAddDriver = this.handleAddDriver.bind(this)
        this.addDriver = this.addDriver.bind(this)
        this.driverStateSet = this.driverStateSet.bind(this)
    }

    handleAddDriver() {
        this.setState(prevState=> {
            return {
                ...prevState,
                setDriverState: true
            }
        })
    }

    addDriver(driver) {
        this.setState(prevState => {
            let driverArray = [
                ...prevState.drivers,
                driver
            ]
            return {
                ...prevState,
                drivers: driverArray
            }
        }, () => console.log(this.state.drivers))
    }

    driverStateSet() {
        this.setState(prevState=> {
            return {
                ...prevState,
                setDriverState: false
            }
        })
    }

    render() {
        return (
            <ModalComponent 
                modalButton={addDriverButton}
                modalHeading="Add a Driver" 
                modalcontent={<AddDriver setDriverState={this.state.setDriverState} driverStateSet={this.driverStateSet} addDriver={this.addDriver}/>}
                modalOnAdd={this.handleAddDriver}
            />
        )
    }
}


class DriverList extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><h4 id="add-vehicle-title" className="page-text-header">Click below to add more drivers to policy</h4></Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={4} sm={12}>
                            <AddDriverComponent />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>{'\u00A0'}</Col>
                        <Col sm={4}><button type="button" className="btn btn-primary btn-next-page">Submit</button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DriverList