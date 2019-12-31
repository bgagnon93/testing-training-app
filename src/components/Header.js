import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SVGComponent extends React.Component {
    render() {
        return (
            <svg {...this.props}>{this.props.children}</svg>
        )
    }
}

class Circle extends React.Component {
    render() {
        return (
            <circle {...this.props}>{this.props.children}</circle>
        )
    }
}

class CircleCounter extends React.Component {
    render(props) {
        return (
            <Col xs={4} className="header-status">
                <div className="circle">
                    <p className="header-progress-number">{this.props.number}</p>
                </div>
                <span className="header-progress-text">{this.props.text}</span>
                {/* <SVGComponent height="40" width="50">
                    <Circle cx="20" cy="20" r="16" fill="#007bff" />
                    <text textAnchor="middle" x="20" y="25" className="header-progress-number">{this.props.number}</text>
                </SVGComponent>
                <span className="header-progress-text">{this.props.text}</span> */}
            </Col>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <Container id="container-header">
                <Row>
                    <CircleCounter text="About You" number="1"/>
                    <CircleCounter text="Your Vehicles" number="2"/>
                    <CircleCounter text="Your Drivers" number="3"/>
                </Row>
            </Container>
        )
    }
}

export default Header