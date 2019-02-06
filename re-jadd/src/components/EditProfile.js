import React, { Component } from "react";
import Map from './Map/Map';
import CurrentLocation from './Map/CurrentLocation'

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: '',
            email: '',
            phone: 0,
            password: '',
            location: '111111,222222'
        }
    }

    handleChange(event) {
        const Name = event.target.name;
        const Value = event.target.value;

        this.setState({
            [Name]: Value,
            id: this.props.user.id
        })
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleEdit(this.state)
        //console.log(this.state)
    }

    handleLocation(data){
        this.setState({
            location: `${data.latitude},${data.longitude}`
        }, function(){
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name: </label><input type="text" name="name" onChange={this.handleChange.bind(this)} placeholder={this.props.user.name} /><hr />
                    <i className="material-icons" style={{ "fontsize": "36px" }} >email</i><input type="text" name="email" onChange={this.handleChange.bind(this)} placeholder={this.props.user.email} /><hr />
                    <i className="material-icons" style={{ "fontsize": "36px" }} >phone</i><input type="number" name="phone" onChange={this.handleChange.bind(this)} placeholder={this.props.user.phone} />
                    <label>Password</label><input type="password" name="password" onChange={this.handleChange.bind(this)} placeholder={this.props.user.password} />
                    <button>submit</button>
                </form>
                <Map handleLocation={this.handleLocation.bind(this)} />
                {/* <CurrentLocation handleLocation={this.handleLocation.bind(this)}/> */}
            </div>
        );
    }
}

export default EditProfile;