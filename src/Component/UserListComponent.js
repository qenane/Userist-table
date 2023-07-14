import React from "react";

export default function UserListComponent(props) {
  const { userlist } = props;
  // console.log(userlist[0])
  return (
    <div className="container mt-5">
      <button className="btn btn-primary"> Add </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Username</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userlist.map((users) => {
            return (
              <tr>
                {/* <th scope="row">1</th> */}
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.surname}</td>
                <td>{users.username}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                  &nbsp;
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
a