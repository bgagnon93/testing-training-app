import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function AboutYouDetail(props) {
    return (
        <div>
            <div><h6>{`${props.user['First Name']} ${props.user['Last Name']}`}</h6></div>
            <div><hr/></div>
            <div><span>{`Address: ${props.user['Street']}`}<br/>{`${props.user['City']}, ${props.user['State']} ${props.user['Zip']}`}</span></div>
            <div><span>{`Date of Birth: ${props.user['Date of Birth']}`}</span></div>
        </div>
    )
}

function VehicleDetail(props) {
    let vehicleList = []
    let vehicleCount = 0
    let message = <div><h6>You didn't add any vehicles.</h6></div>
    for(let vehicle of props.vehicles) {
        vehicleList.push(<div key={`vehicle-detail-${vehicleCount}`}><span>{vehicle.Name}</span></div>)
        vehicleCount += 1
    }

    if(vehicleCount > 0)
        message = <div><div><h6>You added {vehicleCount} {vehicleCount > 1 ? "vehicles" : "vehicle"}:</h6></div><div><hr/></div></div>

    return (
        <Col name="your-vehicles-col" className="info-col" lg={6} md={12} sm={12} xs={12}>
            {message}
            <div>{vehicleList}</div>
        </Col>
    )
}

function DriversDetail(props) {
    let driverList = []
    let driverCount = 0
    let message = <div><h6>You didn't add any additional drivers.</h6></div>
    for(let driver of props.drivers) {
        driverCount += 1
        driverList.push(<div key={`driver-detail-${driverCount}`}><span>{driver.Name}</span></div>)
    }

    if(driverCount > 0)
        message = <div><div><h6>You added {driverCount} {driverCount > 1 ? "drivers" : "driver"}:</h6></div><div><hr/></div></div>

    return (
        <Col name="your-drivers-col" className="info-col" lg={6} md={12} sm={12} xs={12}>
            {message}
            <div>{driverList}</div>
        </Col>
    )
}

class Satisfied extends React.Component {
    render() {
        return (
            <Container className="main-content-container captured-detail">
                <Row name="your-information-row">
                    <Col name="your-information-col" className="page-text-header" xs={12}>
                        <div><h5>Here is what we captured:</h5></div>
                    </Col>
                    <Col name="your-information-col" className="info-col" lg={4} md={6} sm={6} xs={12}>
                        <AboutYouDetail {...this.props}/>
                    </Col>
                    <Col name="vehicles-and-drivers-col" className="info-col" lg={8} md={6} sm={6} xs={12}>
                        <Container>
                            <Row>
                                <DriversDetail {...this.props}/>
                                <VehicleDetail {...this.props}/>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="next-prev-row">
                    <Col sm={4}><button name="previous" type="button" className="btn btn-primary btn-next-page" onClick={this.props.previousPage}>Previous: Your Drivers</button></Col>
                    <Col sm={4}>{'\u00A0'}</Col>
                </Row>
            </Container>
                
            
        )
    }
}

export default Satisfied