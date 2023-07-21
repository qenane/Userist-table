import React, {  useState } from "react";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

export default function FormComponent(props) {
  const { addUser,  showModal, handleCloseModal } = props;
  const [state, setState] = useState({
    id: null,
    name: "",
    surname: "",
    username: "",
  });

  const onSubmit = () => {
    addUser(state.name, state.surname, state.username);
    handleCloseModal();
    setState({user:{}})
  };

  

  return (
    <Modal
      isOpen={showModal}
      modalTransition={{ timeout: 400 }}
      backdropTransition={{ timeout: 100 }}
    >
      <ModalHeader>New User</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Row>
            <Col xs="6">
            <Label for="name">Name -{state.name} </Label>
            <Input
              onChange={(e) => setState({ ...state, name: e.target.value })}
              id="name"
              name="name"
              type="text"
              required
              />
              </Col>
          <Col>
            <Label for="Surname">Surname -{state.surname}</Label>
            <Input
              onChange={(e) => setState({ ...state, surname: e.target.value })}
              id="Surname"
              name="Surname"
              type="text"
              required
              />
              </Col>
              </Row>
          </FormGroup>
          <FormGroup>
            <Label for="Username">Username -{state.username}</Label>
            <Input
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

        <button className="btn btn-danger" onClick={() => handleCloseModal()}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
}
