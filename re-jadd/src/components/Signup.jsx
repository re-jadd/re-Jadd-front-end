import React from "react";
import Map from "./Map/Map";

const Signup = ({ renderInput, handleSubmit }) => {
  return (
    <div className="form">
          <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {renderInput("name", "Name")}
        {renderInput("email", "Email")}
        {renderInput("password", "Password", "password")}
        {renderInput("phone", "Phone")}
        {renderInput("location", "Location")}

        <button className="btnsub"> SignUp </button>
      </form>
      {/* <Map/> */}
    </div>
  );
};

export default Signup;