import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteUser } from "../../actions/userActions";

function Table({ users }) {
  let history = useHistory();

  const dispatch = useDispatch()
  const handleDetail = (id) => {
    history.push(`/users/details/${id}`);
  };
  const handleEdit = (id) => {
    history.push(`/users/edit/${id}`);
  }
  const handleDelete = id => {
    dispatch(deleteUser(id));
  }

  return (
    <div className="table">
      <div className="table_div">
        <table id="table_users">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Phone</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
                <td onClick={() => handleDetail(user.id)}>
                  <i class="fas fa-search"></i>
                </td>
                <td onClick={() => handleEdit(user.id)}>
                  <i class="fas fa-pencil-alt"></i>
                </td>
                <td onClick={() => handleDelete(user.id)}>
                  <i class="fas fa-trash-alt"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Table;
