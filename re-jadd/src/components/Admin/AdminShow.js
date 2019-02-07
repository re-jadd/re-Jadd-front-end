import React, { Component } from "react";
import { seJwt, getJwt } from "../../services/authService";
import ShowData from "./ShowData";
import Map from './Map';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class AdminShow extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
            drivers: null,
            showingInfoWindow: false,
        }
    }

    componentDidMount() {
        this.fetchUsers();
        this.fetchDrivers();
    }

    fetchDrivers() {
        const url = 'http://localhost:3000/Dapi/'
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": getJwt()
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    drivers: data
                })
                this.login();
            })
            .catch(error => {
                console.log(error);
            })
    }

    fetchUsers() {
        const url = 'http://localhost:3000/rapi/'
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": getJwt()
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    users: data
                })
                this.login();
            })
            .catch(error => {
                console.log(error);
            })
    }


    deleteUser(id) {
        const url = `http://localhost:3000/rapi/users/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": getJwt()
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.login();
            })
            .catch(error => {
                console.log(error);
            })
    }

    formatLocation(lan, long) {
        return {
          latitude: lan,
          latitudeDelta: 0.0922,
          longitude: long,
          longitudeDelta: 0.0421,
        }
    }

    renderData() {
        const userData = this.state.users.map(el => {
            console.log(el)
            return (
                <div className="table">
                <table id="customers">
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>

                    <ShowData user={el} key={el.id} />
                    </table>
                </div>
            )
        })
        return userData;
    }

    renderMap() {
        const locationMarker = this.state.users.map(el => {
            return (
                <div>
                    

                        <Marker
                            onClick={() => this.onMarkerClick}
                            coordinate={this.formatLocation(el.location.x, el.location.y)}
                            name={'Kenyatta International Convention Centre'}
                        />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={() => this.onClose}
                        >
                            <div>
                                {/* <h4>{this.state.selectedPlace.name}</h4> */}
                            </div>
                        </InfoWindow>
                </div>
            )
        })
        return locationMarker;
    }

    render() {
        return (
            <div>
                {this.state.users ? this.renderData() : null}
                <Map>
                {this.state.users ? this.renderMap() : null}
                </Map>
            </div >
        );
    }
}

export default AdminShow;

