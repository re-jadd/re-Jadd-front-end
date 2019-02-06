import React, { Component } from "react";
import { getUser, logout } from "./services/authService";
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";
import Profile from "./components/Profile";
import "./App.css";
import { setJwt, getJwt } from "./services/authService";
import AdminShow from './components/Admin/AdminShow';
import Guide from "./components/Guide";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      form: "signup",
      editData: null,
      newRequest: null,
      activePage: "home"
    };
  }

  handleEdit(data) {
    console.log(data)
    this.setState({
      editData: data
    }, function () {
      this.updateProfile(data)
    });
  }

  handleRequest(data) {
    /* this.setState({
      newRequest: data
    }) */
    this.createRequest(data)
  }

  changeActivePage = (activePage) => {

    console.log("\n\n\n\n &&&&&&&&& \n\n\n your are in ", activePage)
    this.setState({ activePage })
  }
  updateProfile(data) {
    console.log(data)
    const url = `http://localhost:3000/rapi/users/${data.id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": getJwt()
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setJwt(data.token);


        this.login();


        this.setState({ user: data.user })
        this.changeActivePage("profile")
        console.log("****************", this.state.user, data.user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  createRequest(data) {
    console.log(data)
    const url = 'http://localhost:3000/rapi/order'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": getJwt()
      },
      body: JSON.stringify(data)
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

  checkForUser() {
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }
  componentDidMount() {
    this.checkForUser();
  }

  changeForm = type => {
    console.log(type);
    this.setState({
      form: type
    });
  };

  login = () => {
    const user = getUser();
    this.setState({ user });
  };

  logout = () => {
    logout();
    this.setState({ user: null });
  };

  getProducts = () => { };

  renderShow() {
    if (this.state.user) {
      if(this.state.user.is_admin === true){
        return (
          <div>
            <AdminShow />
          </div>
        )
      } 
    }
    console.log(this.state)
    if (this.state.activePage === 'profile' && this.state.user) {
      console.log(this.state.user)
      return (
        <div className="profile">
          <Profile user={this.state.user} handleEdit={this.handleEdit.bind(this)} handleRequest={this.handleRequest.bind(this)} />
          {/* <AdminShow/> */}
        </div>
      )
    } else if (this.state.activePage === 'guide') {
      return (
      <div>
       <Guide />
      </div>
      )
    }
    else if (this.state.user === null) {
      return (
      <div>
        <AuthForm form={this.state.form} onLogin={this.login} />
      </div>
      )
    }
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <header>

          <NavBar
            user={this.state.user}
            changeForm={this.changeForm}
            logout={this.logout}
            getProducts={this.getProducts}
            changeActivePage={this.changeActivePage}
          />
        </header>
        <div className="home">

          <div className="container">

          {this.state ?  this.renderShow() : <AuthForm form={this.state.form} onLogin={this.login} />}

            {/* { this.state.activePage === "profile" ? }
          */}
             {/* {this.state.activePage === 'profile' ? <Profile user={this.state.user} handleEdit={this.handleEdit.bind(this)} handleRequest={this.handleRequest.bind(this)} /> : ''} */}
             {/* {this.state.user ? (
              <div className="profile">

                <Profile user={this.state.user} handleEdit={this.handleEdit.bind(this)} handleRequest={this.handleRequest.bind(this)} /></div>
            ) : (<div>
              <AuthForm form={this.state.form} onLogin={this.login} />
              <div >

                {!this.state.user && (<div className="bttn" onClick={() => this.changeForm("signup")}> <h3>Start Recycling</h3></div>)}
              </div>
            </div>
              )} */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;