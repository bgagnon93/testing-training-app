import React from 'react'
import Select from 'react-select'

class SelectField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: (this.props.value ? this.props.value : '')}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.label})
        this.props.onChange(e.label)
    }

    render() {
        return (
            <div className="select-container">
                <h4 className="select-header">{this.props.fieldNameHeader}</h4>
                <Select onChange={this.handleChange} 
                    options={this.props.options} type="text" 
                    name={this.props.fieldName} 
                    defaultValue={{label: this.state.value, value: this.state.value}}
                    className="texbox-input"
                    isDisabled={this.props.disabled}>
                </Select>
            </div>
        )
    }
}

export default SelectField