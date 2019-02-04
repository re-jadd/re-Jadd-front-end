import React, { Component } from "react";


class EditProfile extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChange(event) {
        const Name = event.target.name;
        const Value = event.target.value;

        this.setState({
            [Name]: Value
        })
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name: </label><input type="text" name="name" onChange={this.handleChange.bind(this)} placeholder={this.props.user.name} /><hr />
                    <i className="material-icons" style={{ "fontsize": "36px" }} >email</i><input type="text" name="email" onChange={this.handleChange.bind(this)} placeholder={this.props.user.email} /><hr />
                    <i className="material-icons" style={{ "fontsize": "36px" }} >phone</i><input type="number" name="phone" onChange={this.handleChange.bind(this)} placeholder={this.props.user.phone} />
                   
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default EditProfile;