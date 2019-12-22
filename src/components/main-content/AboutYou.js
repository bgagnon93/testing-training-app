import React from 'react'
import TextField from '../reusable-components/TextField'
import { Container, Row, Col } from 'react-bootstrap'

class AboutYou extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'First Name': this.props.aboutYou['First Name'],
            'Middle Name': this.props.aboutYou['Middle Name'],
            'Last Name': this.props.aboutYou['Last Name'],
            'Street': this.props.aboutYou['Street'],
            'Apt': this.props.aboutYou['Apt'],
            'City': this.props.aboutYou['City'],
            'State': this.props.aboutYou['State'],
            'Zip': this.props.aboutYou['Zip'],
            'Date of Birth': this.props.aboutYou['Date of Birth'],
            'Email': this.props.aboutYou['Email'],
            'Phone': this.props.aboutYou['Phone'],
        }
        this.isComplete = this.isComplete.bind(this)
    }

    isComplete() {
        if(this.state['First Name'] && this.state['Last Name'] &&
        this.state['Street'] && 
        this.state['City'] && this.state['State'] && this.state['Zip'] && 
        this.state['Date of Birth']) {
            this.props.nextPage()
            this.props.updateAboutYou(this.state)
        }
    }

    render() {
        let optional = <span className="texbox-subheader-optional">(optional)</span>
        let required = <span className="texbox-subheader-required">*</span>
        return (
            <div>
                <Container id="about-you" className="main-content-container">
                    <Row>
                        <Col><h4 id="about-you-title" className="page-text-header">Tell us about yourself...</h4></Col>
                    </Row>
                    <Row>
                        <Col sm={5} xs={9}><TextField fieldNameHeader="First Name" fieldName="first-name" handleOnBlur={(e)=>this.setState({'First Name': e})} value={this.props.aboutYou['First Name']}/></Col>
                        <Col sm={2} xs={3}><TextField fieldNameHeader="MI" subHeader="(optional)" fieldName="middle-name" handleOnBlur={(e)=>this.setState({'Middle Name': e})} value={this.props.aboutYou['Middle Name']}/></Col>
                        <Col sm={5}><TextField fieldNameHeader="Last Name" fieldName="last-name" handleOnBlur={(e)=>this.setState({'Last Name': e})} value={this.props.aboutYou['Last Name']}/></Col>
                    </Row>

                    <Row>
                        <Col sm={10}><TextField fieldNameHeader="Street Address" fieldName="street-address" handleOnBlur={(e)=>this.setState({'Street': e})} value={this.props.aboutYou['Street']}/></Col>
                        <Col sm={2}><TextField fieldNameHeader="Apt/Suite" subHeader="(optional)" fieldName="apt" handleOnBlur={(e)=>this.setState({'Apt': e})} value={this.props.aboutYou['Apt']}/></Col>
                    </Row>

                    <Row>
                        <Col sm={8}><TextField fieldNameHeader="City" fieldName="city" handleOnBlur={(e)=>this.setState({'City': e})} value={this.props.aboutYou['City']}/></Col>
                        <Col sm={2}><TextField fieldNameHeader="State" fieldName="state" handleOnBlur={(e)=>this.setState({'State': e})} value={this.props.aboutYou['State']}/></Col>
                        <Col sm={2}><TextField fieldNameHeader="Zip Code" fieldName="zip-code" handleOnBlur={(e)=>this.setState({'Zip': e})} value={this.props.aboutYou['Zip']}/></Col>
                    </Row>

                    <Row>
                        <Col sm={4}><TextField fieldNameHeader="Date of Birth" fieldName="date-of-birth" handleOnBlur={(e)=>this.setState({'Date of Birth': e})} value={this.props.aboutYou['Date of Birth']}/></Col>
                        <Col sm={4}><TextField fieldNameHeader="Email" subHeader="(optional)" fieldName="email" handleOnBlur={(e)=>this.setState({'Email': e})} value={this.props.aboutYou['Email']}/></Col>
                        <Col sm={4}><TextField fieldNameHeader="Phone" subHeader="(optional)" fieldName="phone" handleOnBlur={(e)=>this.setState({'Phone': e})} value={this.props.aboutYou['Phone']}/></Col>
                    </Row>

                    <Row className="next-prev-row">
                        <Col sm={8}>{'\u00A0'}</Col>
                        <Col sm={4}><button name="next" type="button" className="btn btn-primary btn-next-page" onClick={this.isComplete}>Next: Add Vehicles</button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutYou