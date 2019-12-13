import React from 'react'
import Row from 'react-bootstrap/Row'

import ExistingItem from '../reusable-components/ExistingItem'
import AddItem from '../reusable-components/AddItem'

class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {setItemState: false}
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        this.setState({setItemState: !this.state.setItemState})
    }

    render() {
        const buttonList = []
        let itemCount = 0
        for(let item of this.props.listItem) {
            buttonList.push(<ExistingItem 
                {...this.props}
                handleAdd={this.handleAdd}
                setItemState={this.state.setItemState}
                modalContent={React.cloneElement(this.props.modalContent, {handleAdd: this.handleAdd, item: item, count: itemCount++})}
                item={item}
                // key={itemCount++}
                // key={`item-${itemCount++}`} 
            />)
        }
        buttonList.push(<AddItem 
            {...this.props}
            handleAdd={this.handleAdd}
            setItemState={this.state.setItemState}
            modalContent={React.cloneElement(this.props.modalContent, {handleAdd: this.handleAdd, item: {}, count: itemCount++})}
            // key={itemCount++}
            // key={`item-${itemCount++}`}
        />)
        return (
            <Row>{buttonList}</Row>
        )
    }
}

export default ItemList