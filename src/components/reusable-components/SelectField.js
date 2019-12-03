import React from 'react'
import Select from 'react-select'

class SelectField extends React.Component {

    render(props) {
        return (
            <div className="select-container">
                <h4 className="select-header">{this.props.fieldNameHeader}</h4>
                <Select onChange={this.props.onChange} options={this.props.options} type="text" name={this.props.fieldName} className="texbox-input"></Select>
            </div>
        )
    }
}

export default SelectField