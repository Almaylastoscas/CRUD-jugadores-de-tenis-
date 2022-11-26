import React from "react";

const TablaFila = ({
  el,
  setEditarT,
  eliminarTenista,
  setModal,
  setJugadorModal,
}) => {
  const openModal = () => {
    setModal(true);
    setJugadorModal(el);
  };

  return (
    <tr className="table-info table-bordered border-dark  ">
      <td>{el.name}</td>
      <td>{el.torneo}</td>
      <td>
        <button className="btn btn-success  me-2 " onClick={openModal}>
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => eliminarTenista(el.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
