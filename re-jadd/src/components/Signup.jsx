import React from "react";
import Map from "./Map/Map";

const Signup = ({ renderInput, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderInput("name", "Name")}
        {renderInput("email", "Email")}
        {renderInput("password", "Password", "password")}
        {renderInput("phone", "Phone")}
        {renderInput("location", "Location")}

        <button className="btn btn-primary"> SignUp </button>
      </form>
      {/* <Map/> */}
    </div>
  );
};

export default Signup;