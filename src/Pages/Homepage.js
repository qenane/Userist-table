import React from "react";
import UserListComponent from "../Component/UserListComponent";

export default function Homepage(props) {
  const userlist = [
    { id: 1, name: "Kenan", surname: "Erciyes", username: "qenane" },
    { id: 2, name: "Tunahan", surname: "Oguz", username: "toguz" },
    { id: 3, name: "Berk", surname: "Pehlivan", username: "thuyer" },
  ];

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            React intro
          </a>
        </div>
      </nav>
      <UserListComponent userlist={userlist} />
    </div>
  );
}
