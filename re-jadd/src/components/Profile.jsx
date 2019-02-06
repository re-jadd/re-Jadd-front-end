import React, { Component } from "react";
import CreateReguest from './CreateReguest';
import EditProfile from './EditProfile';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      showProfile: true,
      type: []
    }
  }

  handleEdit(data){
    this.props.handleEdit(data)
    this.changeShow()
    //console.log(data)
  }

  handleRequest(data){
    this.props.handleRequest(data)
 
  }

  showProfile() {
    console.log("***********");
    console.log(this.props.user)
    return (
      <div >
        <div>
        <button className="btn" onClick={() => this.changeShow()}>Edit</button>
        <h2>Name: {this.props.user ? this.props.user.name : ""}</h2>
        <hr />
        <h2><i className="material-icons" style={{ "fontsize": "36px" }} >email</i> {this.props.user ? this.props.user.email : ""}</h2>
        <h2><i className="material-icons" style={{ "fontsize": "36px" }} >phone</i>{this.props.user ? this.props.user.phone : ""}</h2>
        {/* <div><i class="material-icons" style={{"font-size":"36px"}} >place</i>{user ? user.location : ""}</div> */}
        </div>
      </div>
    )
  };

  changeShow() {
    this.setState({ showProfile: !this.state.showProfile })
  }

  render() {
    return (
      <div className="content">
      <div  className="pr">
        {this.state.showProfile ? this.showProfile() : <EditProfile user={this.props.user} handleEdit={this.handleEdit.bind(this)} />}
       </div>
       <div className="order">
       
        <CreateReguest user={this.props.user} handleRequest={this.handleRequest.bind(this)} />
      </div>
      </div>
    );
  }
};

export default Profile;