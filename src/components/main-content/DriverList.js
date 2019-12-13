import React from 'react'
import AddDriver from './AddDriver'

import {Container, Row, Col} from 'react-bootstrap'

import { IoIosAddCircleOutline, IoIosPerson} from "react-icons/io";

class DriverList extends React.Component {        
    render() {
        const buttonList = []
        let itemCount = 0
        for(let driver of this.props.drivers) {
            buttonList.push(<Col lg={3} md={4} sm={12}>
            <AddDriver {...this.props} item={driver} modalButtonText={driver.Name} modalGlyph={<IoIosPerson/>} count={itemCount++} newItem={false}/></Col>)
        }
        buttonList.push(<Col lg={3} md={4} sm={12}>
            <AddDriver {...this.props} item={{}} modalButtonText="Add Driver" modalGlyph={<IoIosAddCircleOutline/>} count={itemCount++} newItem={true}/></Col>)
        return (
            <Container className="main-content-container">
                <Row>
                    <Col><h4 id="add-driver-title" className="page-text-header">Click below to add drivers to policy</h4></Col>
                </Row>
                <Row>{buttonList}</Row>
                {/* <ItemList 
                    {...this.props} 
                    listItem={this.props.drivers}
                    modalGlyphAdd={<IoIosAddCircleOutline/>} 
                    modalGlyphExisting={<IoIosPerson/>}
                    modalHeading="Add a Driver" 
                    modalContent={<AddDriver addDriver={this.props.addDriver} saveDriver={this.props.saveDriver} removeDriver={this.props.removeDriver}/>} 
                    modalButtonText="Add Driver" 
                /> */}
                <Row className="next-prev-row">
                    <Col sm={4}><button name="previous" type="button" className="btn btn-primary btn-prev-page" onClick={this.props.previousPage}>Previous: Edit Vehicles</button></Col>
                    <Col sm={4}>{'\u00A0'}</Col>
                    <Col sm={4}><button name="next" type="button" className="btn btn-primary btn-next-page" onClick={this.props.nextPage}>Submit</button></Col>
                </Row>
            </Container>
        )
    }
}

export default DriverList