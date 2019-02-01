import React from "react";

const Profile = ({ user }) => {
  return (
    <div >
      <h2>Name {user ? user.name : ""}</h2>
      <hr />
      <h2><i class="material-icons" style={{"font-size":"36px"}} >email</i> {user ? user.email : ""}</h2>
      <h2><i class="material-icons" style={{"font-size":"36px"}} >phone</i>{user ? user.phone : ""}</h2>
      {/* <div><i class="material-icons" style={{"font-size":"36px"}} >place</i>{user ? user.location : ""}</div> */}

    </div>
  );
};

export default Profile;