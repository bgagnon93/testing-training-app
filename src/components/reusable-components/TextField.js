import React from 'react'

class TextField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: (this.props.value ? this.props.value : '')}
        this.handleChange = this.handleChange.bind(this)
        this.handleOnBlur = this.handleOnBlur.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleOnBlur(e) {
        if(this.props.handleOnBlur)
            this.props.handleOnBlur(e.target.value)
    }

    render(props) {

        return(
            <div className="textbox-container">
                <h4 className="texbox-header">{this.props.fieldNameHeader}</h4>
                <input type="text" name={this.props.fieldName} className="texbox-input" onBlur={this.handleOnBlur} value={this.state.value} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default TextField;