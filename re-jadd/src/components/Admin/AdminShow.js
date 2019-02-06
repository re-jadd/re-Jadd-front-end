import React, { Component } from "react";
import { setJwt, getJwt } from "../../services/authService";
import ShowData from "./ShowData";

class AdminShow extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
            drivers: null
        }
    }

    componentDidMount() {
        this.fetchUsers();
        this.fetchDrivers();
    }

    fetchDrivers(){
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

    fetchUsers(){
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


    deleteUser(id){
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

    renderData(){
        const userData = this.state.users.map(el => {
            return (
                <div>
                    <ShowData user={el} key={el.id} />
                </div>
            )
        })
        return userData;
    }

    render() {
        return (
            <div>
               {this.state.users ? this.renderData() : null}
            </div >
        );
    }
}

export default AdminShow;