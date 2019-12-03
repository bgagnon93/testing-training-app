import React from 'react'
import TextField from '../reusable-components/TextField'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AboutYou extends React.Component {
    render() {
        return (
            <div>
                <Container id="about-you">
                    <Row>
                        <Col><h4 id="about-you-title" className="page-text-header">Tell us about yourself...</h4></Col>
                    </Row>
                    <Row>
                        <Col sm={5} xs={9}><TextField fieldNameHeader="First Name" fieldName="first-name"/></Col>
                        <Col sm={2} xs={3}><TextField fieldNameHeader="MI" fieldName="middle-name"/></Col>
                        <Col sm={5}><TextField fieldNameHeader="Last Name" fieldName="last-name"/></Col>
                    </Row>

                    <Row>
                        <Col sm={10}><TextField fieldNameHeader="Street Address" fieldName="street-address"/></Col>
                        <Col sm={2}><TextField fieldNameHeader="Apt/Suite" fieldName="apt"/></Col>
                    </Row>

                    <Row>
                        <Col sm={8}><TextField fieldNameHeader="City" fieldName="city"/></Col>
                        <Col sm={2}><TextField fieldNameHeader="State" fieldName="state"/></Col>
                        <Col sm={2}><TextField fieldNameHeader="Zip Code" fieldName="zip-code"/></Col>
                    </Row>

                    <Row>
                        <Col sm={4}><TextField fieldNameHeader="Date of Birth" fieldName="date-of-birth"/></Col>
                        <Col sm={4}><TextField fieldNameHeader="Email" fieldName="email"/></Col>
                        <Col sm={4}><TextField fieldNameHeader="Phone" fieldName="phone"/></Col>
                    </Row>

                    <Row>
                        <Col sm={8}>{'\u00A0'}</Col>
                        <Col sm={4}><button type="button" className="btn btn-primary btn-next-page">Next: Add Your Vehicles</button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutYou