import React from 'react'
import AddDriver from './AddDriver'

import {Container, Row, Col} from 'react-bootstrap'
import { IoIosAddCircleOutline, IoIosPerson} from "react-icons/io";

class DriverList extends React.Component {        
    render() {
        const buttonList = []
        let itemCount = 0
        for(let driver of this.props.drivers) {
            buttonList.push(<Col lg={4} md={6} sm={12} key={driver.Name}>
                <AddDriver {...this.props} item={driver} modalButtonText={driver.Name} modalGlyph={<IoIosPerson/>} count={driver.count} newItem={false}/></Col>)
                itemCount = driver.count
        }
        buttonList.push(<Col lg={4} md={6} sm={12} key={"New Driver " + itemCount+1}>
            <AddDriver {...this.props} item={{}} modalButtonText="Add Driver" modalGlyph={<IoIosAddCircleOutline/>} count={itemCount+1} newItem={true}/></Col>)
        return (
            <Container className="main-content-container">
                <Row>
                    <Col><h4 id="add-driver-title" className="page-text-header">Click below to add drivers to policy</h4></Col>
                </Row>
                <Row>{buttonList}</Row>
                <Row className="next-prev-row">
                    <Col lg={3} sm={5} xs={6}><button name="previous" type="button" className="btn btn-primary btn-prev-page btn-page-nav" onClick={this.props.previousPage}>Previous: Edit Vehicles</button></Col>
                    <Col lg={7} sm={2} className="d-none d-sm-block">{'\u00A0'}</Col>
                    <Col lg={2} sm={5} xs={6}><button name="next" type="button" className="btn btn-primary btn-next-page btn-page-nav" onClick={this.props.nextPage}>Submit</button></Col>
                </Row>
            </Container>
        )
    }
}

export default DriverList