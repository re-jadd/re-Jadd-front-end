import React from "react";

const Login = props => {
  return (
    <div className="form">
      <h1>Login</h1>
      <form  onSubmit={props.handleSubmit}>
        {props.renderInput("email", "Email")}
        {props.renderInput("password", "Password", "password")}
        <button className="btnsub"> Login </button>
      </form>
    </div>
  );
};

export default Login;