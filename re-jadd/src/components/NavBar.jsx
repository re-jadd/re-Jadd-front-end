import React from "react";
import logo from "../jddlogo.png";
const NavBar = ({ user, changeForm, logout, getProducts , changeActivePage }) => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
            <img src={logo} style={{"width":"90px"}}/>
            </div>

            <div className="NavBar">
                <ul className="navbar-nav">
                    {// if the user is not authenticated
                        !user && (
                            <React.Fragment>
                                <li onClick={() => {getProducts() ; changeActivePage("home")} }>
                                    <div >Why Recycling?</div>
                                </li>
                                <li  onClick={() =>  { changeForm("services") ;  changeActivePage("profile") }}>
                                <div>Profile</div>
                            </li>

                                <li onClick={() => {getProducts() ;  changeActivePage("guide")}}>
                                    <div >Recycling Guide</div>
                                </li>

                                <li onClick={() => {changeForm("signup") ;  changeActivePage("signup")}}
                                >
                                    <div>Signup</div>
                                </li>
                                <li
                                    className="nav-item active"
                                    onClick={() => {changeForm("login")  ;  changeActivePage("login")}}
                                >
                                    <div>Login</div>
                                </li>
                            </React.Fragment>
                        )}
                    {user && (
                        <React.Fragment>
                            <li className="nav-item active" onClick={() => {getProducts()  ;  changeActivePage("home")}}>
                                <div>Why Recycling?</div>
                            </li>

                            <li className="nav-item active" onClick={() => {getProducts()  ;  changeActivePage("profile")}}>
                                <div>Profile</div>
                            </li>
                            <li className="nav-item active" onClick={() => { getProducts() ;  changeActivePage("guide")}}>
                                <div>Recycling Guide</div>
                            </li>
                            <li className="nav-item active" onClick={() => { logout() ;  changeActivePage("logout")}}>
                                <div>Logout</div>
                            </li>
                        </React.Fragment>
                    )
                        // if the user authenticated
                    }
                </ul>
            </div>
        </nav>
<div>


</div>
        </div>
    );
};

export default NavBar;