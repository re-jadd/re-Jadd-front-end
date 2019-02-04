import React from "react";

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
    </div>
  );
};

export default Signup;