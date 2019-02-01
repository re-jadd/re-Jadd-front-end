import React from "react";
import logo from "../jddlogo.png";
const NavBar = ({ user, changeForm, logout, getProducts }) => {
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
                                <li onClick={() => getProducts()}>
                                    <div >Why Recycling?</div>
                                </li>
                                <li  onClick={() =>  changeForm("signup")}>
                                <div>Pickup Services</div>
                            </li>

                                <li onClick={() => getProducts()}>
                                    <div >Recycling Guide</div>
                                </li>

                                <li onClick={() => changeForm("signup")}
                                >
                                    <div>Signup</div>
                                </li>
                                <li
                                    className="nav-item active"
                                    onClick={() => changeForm("login")}
                                >
                                    <div>Login</div>
                                </li>
                            </React.Fragment>
                        )}
                    {user && (
                        <React.Fragment>
                            <li className="nav-item active" onClick={() => getProducts()}>
                                <div>Why Recycling?</div>
                            </li>

                            <li className="nav-item active" onClick={() => getProducts()}>
                                <div>Pickup Services</div>
                            </li>
                            <li className="nav-item active" onClick={() => getProducts()}>
                                <div>Recycling Guide</div>
                            </li>
                            <li className="nav-item active" onClick={() => logout()}>
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