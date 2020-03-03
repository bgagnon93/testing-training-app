import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
import SelectField from '../reusable-components/SelectField'
import ModalButton from '../reusable-components/ModalButton'
import ModalFooter from '../reusable-components/ModalFooter'

const options = [
    { value: 'car', label: 'Car/SUV/Pickup/Van' },
    { value: 'motor-home', label: 'Motor Home' },
    { value: 'travel-trailer', label: 'Travel Trailer' },
    { value: 'utility-trailer', label: 'Utility Trailer' }
]

let yearList = []
let makeList = []
let makeIdMap = []


class AddVehicle extends React.Component {
    constructor(props) {
        super(props)
        let item = this.props.item
        this.state = {
            'Vehicle Type': (item && item['Vehicle Type'] ? item['Vehicle Type'] : ''),
            'Vehicle Year': (item && item['Vehicle Year'] ? item['Vehicle Year'] : ''),
            'Vehicle Make': (item && item['Vehicle Make'] ? item['Vehicle Make'] : ''),
            'Vehicle Model': (item && item['Vehicle Model'] ? item['Vehicle Model'] : ''),
            'Name': (item && item['Name'] ? item['Name'] : ''),
            'count': this.props.count,
            'edit': (item && item['edit'] ? item['edit'] : ''),
            modelList: [],
        }
        
        this.handleChangeMake = this.handleChangeMake.bind(this);
        this.addVehicle = this.addVehicle.bind(this)
        this.saveVehicle = this.saveVehicle.bind(this)
        this.removeVehicle = this.removeVehicle.bind(this)
        this.close = this.close.bind(this)
    }

    componentDidMount() {
        this.getYearList();
        this.getMakeList();
    }

    handleChangeMake(e) {
        this.setState({'Vehicle Make': e})
        this.setState({'Vehicle Model': ''})
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeIdMap[e]}/modelyear/${this.state['Vehicle Year']}/vehicleType/car?format=json`)
        .then(response => response.json())
        .then(data => this.handleModel(data.Results))
    }

    addVehicle() {
        this.setState(prevState => {
            return {
                ...prevState,
                modalShow: false,
                'edit': 'disabled',
                'Name': `${this.state['Vehicle Year']} ${this.state['Vehicle Make']} ${this.state['Vehicle Model']}`
            }
        }, ()=>{this.props.addVehicle(this.state)})
    }

    editVehicle() {
        this.setState({'edit': ''})
    }

    saveVehicle() {
        this.setState({modalShow: false})
        this.setState({'edit': 'disabled'})
        this.setState({'Name': `${this.state['Vehicle Year']} ${this.state['Vehicle Make']} ${this.state['Vehicle Model']}`}, ()=>{this.props.saveVehicle(this.state)})
    }

    removeVehicle() {
        this.setState({modalShow: false})
        this.props.removeVehicle(this.state)
    }

    close() {
        this.setState({modalShow: false})
        if(!this.props.newItem)
            this.setState({'edit': 'disabled'})
    }

    getYearList() {
        const year = new Date().getFullYear()
        let options = []

        for(let i = year + 1; i > year - 50; i--) {
            options.push({value: i, label: i});
        }
        options.push({value: "unlisted", label: "I don't see it listed"});
        yearList = options
    }

    getMakeList() {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
        .then(response => response.json())
        .then(data => {
            let options = this.prepareArray(data.Results, 'MakeName')
            let newMakeIdMap = this.createMakeIdMap(data.Results)
            makeList = options
            makeIdMap = newMakeIdMap
        })        
    }

    handleModel(modelInfoList) {
        let options = this.prepareArray(modelInfoList, 'Model_Name')
        this.setState({modelList: options})
    }

    createMakeIdMap(list) {
        let obj = {};
        for(let item of list) {
            obj[item['MakeName']] = item['MakeId']
        }
        return obj
    }

    prepareArray(list, key) {
        let listToSort = [];
        let selectList = [];
        for(let item of list) {
            if(item[key]) {
                listToSort.push(item[key])
            }
        }

        listToSort.sort();

        for(let item of listToSort) {
            selectList.push({value: item, label: item})
        }
        return selectList;
    }

    addButton = <Button onClick={() => this.addVehicle()}>Add</Button>
    saveButton = <Button onClick={() => this.saveVehicle()}>Save</Button>
    editButton = <Button onClick={() => this.editVehicle()}>Edit</Button>
    closeButton = <Button onClick={() => this.close()}>Close</Button>
    removeButton = <Button onClick={() => this.removeVehicle()}>Remove</Button>

    render() {
        return (
            <ButtonToolbar>
                <ModalButton name="add-item" updateModalShow={() => this.setState({modalShow: true})} modalButtonText={this.props.modalButtonText} modalGlyph={this.props.modalGlyph}/>
                <Modal
                    show={this.state.modalShow}
                    onHide={() => this.close()}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">Add a Vehicle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <SelectField name="vehicle-type" onChange={(e)=>this.setState({'Vehicle Type': e})} options={options} fieldNameHeader="What type of vehicle would you like to add?" fieldName="vehicle-type" value={this.props.item['Vehicle Type']} disabled={this.state.edit}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}><hr/></Col>
                            </Row>
                            <Row>
                                <Col lg={3} md={4}><SelectField name="vehicle-year" onChange={(e)=>this.setState({'Vehicle Year': e})} options={yearList} fieldNameHeader="Year" fieldName="year" value={this.props.item['Vehicle Year']} disabled={this.state.edit}/></Col>
                                <Col lg={5} md={8}><SelectField name="vehicle-make" onChange={this.handleChangeMake} options={makeList} fieldNameHeader="Make" fieldName="make" value={this.props.item['Vehicle Make']} disabled={this.state.edit}/></Col>
                                <Col lg={4} md={12}><SelectField name="vehicle-model" onChange={(e)=>this.setState({'Vehicle Model': e})} options={this.state.modelList} fieldNameHeader="Model" fieldName="model" value={this.props.item['Vehicle Model']} disabled={this.state.edit}/></Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <ModalFooter newItem={this.props.newItem} editItem={this.state.edit} addButton={this.addButton} editButton={this.editButton} saveButton={this.saveButton} removeButton={this.removeButton} closeButton={this.closeButton}/>
                </Modal>
            </ButtonToolbar>
        )
    }
}

export default AddVehicle