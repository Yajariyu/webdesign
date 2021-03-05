import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/userActions";


const Dashboard = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    let mounted = true;
    const getAllUsers = () => dispatch(getUsers());
    if (mounted) getAllUsers();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  return loading ? (
    <div>Loading</div>
  ) : error ? (
    <div className="alert">Hubo un Error</div>
  ) : (
        <div className="dashboard">
          {users.length > 1 ? (<Table users={users} />) :
            <div className="alert">No hay Usuarios</div>}
        </div>
      );
};

export default Dashboard;
