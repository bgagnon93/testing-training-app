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
            <div>
                <SVGComponent height="40" width="50">
                    <Circle cx="20" cy="20" r="16" fill="#007bff" />
                    <text textAnchor="middle" x="20" y="25" className="header-progress-number">{this.props.number}</text>
                </SVGComponent>
                <span className="header-progress-text">{this.props.text}</span>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <Container id="container-header">
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <CircleCounter text="About You" number="1"/>
                    </Col>
                    <Col xs={4}>
                        <CircleCounter text="Your Vehicles" number="2"/>
                    </Col>
                    <Col xs={4}>
                        <CircleCounter text="Your Drivers" number="3"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header