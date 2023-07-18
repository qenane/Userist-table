import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default function FormComponent(props) {
  const { addUser, hide, states} = props;
  const [state, setState] = useState({
    name: "",
    surname: "",
    username: "",
  });
  const {user, visible} = states
  const onSubmit = () => {
     hide(true) 
    addUser(state.name, state.surname, state.username);
  };

  return (
    <Modal isOpen={visible}>
      <ModalHeader>Ekleme işlemi yapılacak</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name - {states.user.name}</Label>
            <Input
                  value ={states.user.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              id="name"
              name="name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Surname">Surname</Label>
            <Input
            value ={states.user.surname}
            

              onChange={(e) => setState({ ...state, surname: e.target.value })}
              id="Surname"
              name="Surname"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input
            value={states.user.username}
              onChange={(e) => setState({ ...state, username: e.target.value })}
              id="Username"
              name="Username"
              type="text"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" onClick={() => onSubmit()}>
          Add
        </button>
        <button className="btn btn-danger" onClick={() => hide()}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
}
