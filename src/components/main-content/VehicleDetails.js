import React from 'react'
import SelectField from '../reusable-components/SelectField'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class VehicleDetails extends React.Component {
    constructor() {
        super()
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeMake = this.handleChangeMake.bind(this);
        this.handleChangeModel = this.handleChangeModel.bind(this);
        this.state = {
            yearList: [],
            year: "Select Year...",
            makeList: [],
            makeIdMap: [],
            make: "Select Make...",
            modelList: [],
            model: "Select Model..."
        }
    }

    componentDidMount() {
        this.getYearList();
        this.getMakeList();
    }

    getYearList() {
        const year = new Date().getFullYear()
        let options = []

        for(let i = year + 1; i > year - 50; i--) {
            options.push({value: i, label: i});
        }
        options.push({value: "unlisted", label: "I don't see it listed"});

        this.setState(prevState => {
            return {
                ...prevState,
                yearList: options
            }
        })
    }

    getMakeList() {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
        .then(response => response.json())
        .then(data => {
            let options = this.prepareArray(data.Results, 'MakeName')
            let newMakeIdMap = this.createMakeIdMap(data.Results)
            this.setState(prevState => {
                return {
                    ...prevState,
                    makeList: options,
                    makeIdMap: newMakeIdMap
                }
            })
        })        
    }

    handleModel(modelInfoList) {
        let options = this.prepareArray(modelInfoList, 'Model_Name')
        this.setState(prevState => {
            return {
                ...prevState,
                modelList: options
            }
        })
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

    handleChangeYear(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                year: e.value,
            }
        })
    }

    handleChangeMake(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                make: e.value
            }
        })
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${this.state.makeIdMap[e.value]}/modelyear/${this.state.year}/vehicleType/car?format=json`)
        .then(response => response.json())
        .then(data => this.handleModel(data.Results))
    }

    handleChangeModel(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                model: e.value
            }
        })
    }

    render() {
        return (
            <Row>
                <Col lg={3} md={4}><SelectField onChange={this.handleChangeYear} options={this.state.yearList} fieldNameHeader="Year" fieldName="year"/></Col>
                <Col lg={5} md={8}><SelectField onChange={this.handleChangeMake} options={this.state.makeList} fieldNameHeader="Make" fieldName="make"/></Col>
                <Col lg={4} md={12}><SelectField onChange={this.handleChangeModel} options={this.state.modelList} fieldNameHeader="Model" fieldName="model"/></Col>
            </Row>
        )
    }
}

export default VehicleDetails