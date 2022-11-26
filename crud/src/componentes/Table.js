import React, { useState } from "react";
import TablaFila from "./TablaFila";
import ModalEditar from "./ModalEditar";

const Table = ({
  setDbTenistas,
  dbTenistas,
  setEditarT,
  eliminarTenista,
  modal,
  setModal,
  clouseModal,
}) => {
  const [jugadorModal, setJugadorModal] = useState({});
  console.log(jugadorModal, "yo soy jugador");
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table className="table table-danger table-bordered border-dark ">
        <thead>
          <tr>
            <th scope="col">Jugador</th>
            <th scope="col">Torneo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dbTenistas.map((el) => (
            <TablaFila
              key={el.id}
              el={el}
              setEditarT={setEditarT}
              eliminarTenista={eliminarTenista}
              setJugadorModal={setJugadorModal}
              setModal={setModal}
            />
          ))}
        </tbody>
      </table>
      <ModalEditar
        modal={modal}
        setModal={setModal}
        clouseModal={clouseModal}
        jugadorModal={jugadorModal}
        setJugadorModal={setJugadorModal}
        dbTenistas={dbTenistas}
        setDbTenistas={setDbTenistas}
      />
    </div>
  );
};

export default Table;
