import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { editarDatos } from "../Peticiones/Llamados";

const ModalEditar = ({
  setDbTenistas,
  dbTenistas,
  modal,
  setModal,
  clouseModal,
  jugadorModal,
  setJugadorModal,
}) => {
  const handleModalChange = (e) => {
    setJugadorModal({
      ...jugadorModal,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitModal = (e) => {
    e.preventDefault();
    editarDatos(jugadorModal).then((res) => console.log(res));
    let tenistaeditado = dbTenistas.map((el) =>
      el.id === jugadorModal.id ? jugadorModal : el
    );
    setDbTenistas(tenistaeditado);
    setModal(false);
  };
  return (
    <div>
      <Modal show={modal} onHide={clouseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitModal}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jugador</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Ingrese Jugador"
                autoFocus
                value={jugadorModal.name}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Torneo</Form.Label>
              <Form.Control
                name="torneo"
                type="text"
                placeholder="Ingrese Torneo"
                autoFocus
                value={jugadorModal.torneo}
                onChange={handleModalChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clouseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitModal}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </div>
  );
};

export default ModalEditar;
