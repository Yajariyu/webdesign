import React from "react";
import UserCard from "./UserCard";

function UserDetails() {
  return (
    <div className="userDetail">
      <h1>User Information</h1>
      <UserCard disable={true} />
    </div>
  );
}

export default UserDetails;
