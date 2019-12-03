import React from 'react'

class TextField extends React.Component {
    constructor(props) {
        super(props)
        this.handleOnBlur = this.handleOnBlur.bind(this)
    }

    handleOnBlur(e) {
        if(this.props.handleOnBlur)
            this.props.handleOnBlur(e.target.value)
    }

    render(props) {

        return(
            <div className="textbox-container">
                <h4 className="texbox-header">{this.props.fieldNameHeader}</h4>
                <input type="text" name={this.props.fieldName} className="texbox-input" onBlur={this.handleOnBlur}></input>
            </div>
        )
    }
}

export default TextField;