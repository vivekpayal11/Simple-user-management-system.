import React from "react";
import { Table } from "react-bootstrap";

const ViewUser = (props) => {
  const user = props.location.state.user;

  console.log("user", user);
  return (
    <div className="container">
      <Table responsive bordered hover size="sm" className="UserList">
        <thead className="UserList-head">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile.no</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
          </tr>
        </tbody>
      </Table>
      <a className="btn btn-primary mr-2 cancelBtn" href="/">
        Back
      </a>
    </div>
  );
};

export default ViewUser;
