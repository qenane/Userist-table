import React, { useState } from "react";
import { Alert, Table } from "reactstrap";
import FormComponent from "./FormComponent";

export default function UserListComponent(props) {
  const { userlist, addUser, deleteUser } = props;
  const [states, setStates] = useState({
    user: "",
    visible: false
  })

  function getElementById(value) {
    setStates({
      user: value,
      visible: true
    })
  }

  function hide() {
    setStates({...states, visible:false})
  }
  // console.log(userlist[0])
  return (
    <div className="container mt-5">
      {states.visible ? (
        <FormComponent
          addUser={addUser}
          visible={states.visible}
          hide={hide}
          states= {states}
        />
      ) : (
        <></>
      )}
      {userlist.length > 0 ? (
        <Table>
          <thead className="table-warning">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userlist.map((user) => {
              return (
                <tr key={user.id}>
                  {/* <th scope="row"></th> */}
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => getElementById(user)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Alert color="primary">Tabloya ekleme yapınız.</Alert>
      )}
      <button className="btn btn-primary" onClick={() => setStates({...states, visible: true})}>
        Add
      </button>
    </div>
  );
}
