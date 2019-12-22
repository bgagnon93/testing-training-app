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

    render() {
        return(
            <div className="textbox-container">
                <div className="texbox-header"><span>{this.props.fieldNameHeader}</span><span className="texbox-subheader">{this.props.subHeader}</span></div>
                <input type="text" name={this.props.fieldName} className="texbox-input" onBlur={this.handleOnBlur} value={this.state.value} onChange={this.handleChange} disabled={this.props.disabled}></input>
            </div>
        )
    }
}

export default TextField;