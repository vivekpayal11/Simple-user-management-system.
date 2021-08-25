import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListUser.css";
import axiosMain from "./../../http/axios/axios_main";

const ListUser = () => {
  const [showList, setShowList] = useState(false);
  const [user, setUser] = useState([]);

  const display = async () => {
    setShowList(true);
    const response = await axiosMain.get("/users");

    setUser(response.data);
  };

  const deleteuser = async (id) => {
    const response = await axiosMain.delete(`/users/${id}`);

    alert(response.data.message);
    display();
  };

  return (
    <div className="container listUsers">
      <div className="listUsersbody">
        <Button onClick={display}>List All Users</Button>
        <a href="/AddUser" className="btn btn-primary adduser">
          Add User
        </a>
        <Table responsive bordered hover size="sm" className="UserList">
          <thead className="UserList-head">
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          {showList ? (
            <tbody>
              {user.map((user, index) => (
                <tr key={index}>
                  <td>{user._id || ""}</td>
                  <td>{user.name || ""}</td>
                  <td>
                    <Link
                      to={{ pathname: "/users", state: { user: user } }}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={{ pathname: "/EditUser", state: { user: user } }}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteuser(user._id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </Table>
      </div>
    </div>
  );
};

export default ListUser;
