import React, { useState } from "react";
import UserListComponent from "../Component/UserListComponent";
import { Navbar, NavbarBrand } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

export default function Homepage(props) {
  const [users, setUsers] = useState([
    { id: uuidv4(), name: "Kenan", surname: "Erciyes", username: "qenane" },
    { id: uuidv4(), name: "Tunahan", surname: "Oguz", username: "toguz" },
    { id: uuidv4(), name: "Berk", surname: "Pehlivan", username: "thuyer" },
  ]);

  const addUser = (name, surname, username) => {
    if (name !== "" && surname !== "" && username !== "") { 
      const newUser = {
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      };
      let tempUsers = users;
      tempUsers.push(newUser);
      toast(`"${name}" kullanıcısı eklendi`);
    } else {
      alert("please fill all fields.");
    }
  };
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => {
      return user.id !== id
      
    }
    );
    setUsers(updatedUsers);
  };
  
  return (
    <div>
      <ToastContainer />
      <Navbar color="light" expand="md" light>
        <div className="container">
          <NavbarBrand href="/">react- intro</NavbarBrand>
        </div>
      </Navbar>
      <UserListComponent
        userlist={users}
        addUser={addUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}
