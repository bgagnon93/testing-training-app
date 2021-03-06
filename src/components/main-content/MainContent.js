import React from 'react'

import AboutYou from './AboutYou'
import VehicleList from './VehicleList';
import DriverList from './DriverList';
import Satisfied from './Satisfied';

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            page: 1,
            aboutYou: {},
            vehicles: [],
            drivers: []
        }
        this.updateAboutYou = this.updateAboutYou.bind(this)
        this.addDriver = this.addDriver.bind(this)
        this.saveDriver = this.saveDriver.bind(this)
        this.removeDriver = this.removeDriver.bind(this)

        this.addVehicle = this.addVehicle.bind(this)
        this.saveVehicle = this.saveVehicle.bind(this)
        this.removeVehicle = this.removeVehicle.bind(this)

        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
    }

    updateAboutYou(aboutYouUpdated) {
        this.setState({ aboutYou: aboutYouUpdated })
    }

    addDriver(driver) {
        this.setState(prevState => {
            prevState.drivers.push(driver)
            return {
                ...prevState,
                drivers: prevState.drivers
            }
        })
    }

    saveDriver(driver) {
        for (let i = 0; i < this.state.drivers.length; i++) {
            if (driver['count'] === this.state.drivers[i]['count']) {
                this.setState(prevState => {
                    prevState.drivers[i] = driver
                    return {
                        ...prevState,
                        drivers: prevState.drivers
                    }
                })
                return
            }
        }
    }

    removeDriver(driver) {
        let newDrivers = []
        for (let i = 0; i < this.state.drivers.length; i++) {
            if (driver['count'] !== this.state.drivers[i]['count']) {
                newDrivers.push(this.state.drivers[i])
            }
        }
        this.setState(prevState => {
            return {
                ...prevState,
                drivers: newDrivers
            }
        })
    }

    addVehicle(vehicle) {
        this.setState(prevState => {
            prevState.vehicles.push(vehicle)
            return {
                ...prevState,
                vehicles: prevState.vehicles
            }
        })
    }

    saveVehicle(vehicle) {
        for (let i = 0; i < this.state.vehicles.length; i++) {
            if (vehicle['count'] === this.state.vehicles[i]['count']) {
                this.setState(prevState => {
                    prevState.vehicles[i] = vehicle
                    return {
                        ...prevState,
                        vehicles: prevState.vehicles
                    }
                })
                return
            }
        }
    }

    removeVehicle(vehicle) {
        let newVehicles = []
        for(let i = 0; i < this.state.vehicles.length; i++) {
            if(vehicle['count'] !== this.state.vehicles[i]['count']) {
                newVehicles.push(this.state.vehicles[i])
            }
        }
        this.setState(prevState => {
            return {
                ...prevState,
                vehicles: newVehicles
            }
        })
    }

    nextPage() {
        this.setState(prevState => {
            return {
                ...prevState,
                page: prevState.page + 1
            }
        })
    }

    previousPage() {
        this.setState(prevState => {
            return {
                ...prevState,
                page: prevState.page - 1
            }
        })
    }

    render() {
        let mainContent
        if (this.state.page === 1)
            mainContent = <AboutYou aboutYou={this.state.aboutYou} updateAboutYou={this.updateAboutYou} nextPage={this.nextPage} previousPage={this.previousPage} />
        else if (this.state.page === 2)
            mainContent = <VehicleList vehicles={this.state.vehicles} addVehicle={this.addVehicle} saveVehicle={this.saveVehicle} removeVehicle={this.removeVehicle} nextPage={this.nextPage} previousPage={this.previousPage} />
        else if (this.state.page === 3)
            mainContent = <DriverList drivers={this.state.drivers} addDriver={this.addDriver} saveDriver={this.saveDriver} removeDriver={this.removeDriver} nextPage={this.nextPage} previousPage={this.previousPage} />
        else if (this.state.page === 4)
            mainContent = <Satisfied user={this.state.aboutYou} drivers={this.state.drivers} vehicles={this.state.vehicles} previousPage={this.previousPage} />

        return (
            mainContent
        )
    }
}

export default MainContent