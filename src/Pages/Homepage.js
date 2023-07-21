import React, { useState } from "react";
import UserListComponent from "../Component/UserListComponent";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Homepage(props) {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <div className="container">
          <NavbarBrand href="/">react- intro</NavbarBrand>
        </div>
      </Navbar>
      <UserListComponent />
    </div>
  );
}
