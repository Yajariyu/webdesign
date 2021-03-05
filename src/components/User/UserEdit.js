import React from "react";
import UserCard from "./UserCard";

const UserEdit = () => {
  return (
    <div className="userEdit">
      <h1>User Information</h1>
      <UserCard disable={false} />
    </div>
  );
};

export default UserEdit;
