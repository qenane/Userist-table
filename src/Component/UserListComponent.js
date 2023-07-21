import React, { useState, } from "react";
import { Alert, Table } from "reactstrap";
import FormComponent from "./FormComponent";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import EditForm from "./EditForm";

export default function UserListComponent() {
  // const { userlist, , deleteUser } = props;
  const [states, setStates] = useState({
    user: {},
    visible: false,
  });
  // const[title,setTitle]=useState({title:""})
  const [showModal, setModal] = useState(false);
  const handleShowModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  function getElementById(value) {
    setStates({
      user: value,
      visible: true,
      title: value.name,
    });
  }
  const handleChange = (field, secondField, value) => {
    if (field === "user") {
      setStates({
        ...states,
        user: {
          ...states.user,
          [secondField]: value,
        },
      });
      return;
    }

    setStates({
      ...states,
      [field]: value,
    });
  };

  function hide() {
    setStates({ ...states, visible: false });
  }
  // console.log(userlist[0])
  const [users, setUsers] = useState([
    { id: uuidv4(), name: "Kenan", surname: "Erciyes", username: "qenane" },
    { id: uuidv4(), name: "Tunahan", surname: "Oguz", username: "toguz" },
    { id: uuidv4(), name: "Berk", surname: "Pehlivan", username: "thuyer" },
  ]);


  const handleEditUser = (id, name, surname, username) => {
    if (id && name && surname && username) {
      let tempUsers = users.filter((u) => {
        return u.id !== id;
      });
      tempUsers.push({
        id: id,
        name: name,
        surname: surname,
        username: username,
      });
      setUsers(tempUsers);
    }
  };
  const addUser = (name, surname, username) => {
    if (name && surname && username) {
      let tempUsers = users;
      tempUsers.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      toast(`"${name}" kullanıcısı eklendi`);
    } else {
      alert("Boşlukları doldurunuz.");
    }
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(updatedUsers);
  };
  return (
    <div className="container mt-5">
      <EditForm
        addUser={addUser}
        visible={states.visible}
        hide={hide}
        states={states}
        handleChange={handleChange}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleEditUser={handleEditUser}
      />

      <FormComponent
        addUser={addUser}
        visible={states.visible}
        hide={hide}
        states={states}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      {users.length > 0 ? (
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
            {users.map((user) => {
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
      <button className="btn btn-primary" onClick={() => handleShowModal()}>
        Add
      </button>
      <ToastContainer />
    </div>
  );
}
