import React, { useState  } from "react";
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

export default function EditForm(props) {
  const { hide, states, handleChange, handleEditUser } = props;
  const [state, setState] = useState({
    id: null,
    name: "",
    surname: "",
    username: "",
  });
  const { visible } = states;

  const onUpdate = () => {
    handleEditUser(
      states.user.id,
      states.user.name,
      states.user.surname,
      states.user.username
    );
    setState({ id: null, name: "", surname: "", username: "" });



    hide();
  };
  return (
    <Modal isOpen={visible}>
      <ModalHeader>{states.title}</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name - {states.user.name}</Label>
            <Input
              value={states.user.name}
              onChange={(e) => handleChange("user", "name", e.target.value)}
              id="name"
              name="name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Surname">Surname</Label>
            <Input
              value={states.user.surname}
              onChange={(e) => handleChange("user", "surname", e.target.value)}
              name="Surname"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input
              value={states.user.username}
              onChange={(e) => handleChange("user", "username", e.target.value)}
              id="Username"
              name="Username"
              type="text"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" onClick={() => onUpdate()}>
          Update
        </button>

        <button className="btn btn-danger" onClick={() => hide()}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
}
