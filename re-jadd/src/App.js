import React, { Component } from "react";
import { getUser, logout } from "./services/authService";
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";
import Profile from "./components/Profile";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      form: "signup"
    };
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

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <header>
          <img src="" />
          <NavBar
            user={this.state.user}
            changeForm={this.changeForm}
            logout={this.logout}
            getProducts={this.getProducts}
          />
        </header>
        <div className="home">

          <div className="container">
            {this.state.user ? (
              <div className="profile"> <Profile user={this.state.user} /></div>
            ) : (<div>
              <AuthForm form={this.state.form} onLogin={this.login} />
              <div >

                {!this.state.user && (<div className="bttn" onClick={() => this.changeForm("signup")}> <h3>Start Recycling</h3></div>)}
              </div>
            </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;