import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Table from "./Table";
import { obtenerDatos } from "../Peticiones/Llamados";
import { enviarDatos } from "../Peticiones/Llamados";

import { eliminarDatos } from "../Peticiones/Llamados";
import Loading from "./Loading";

export const Crud = () => {
  const [dbTenistas, setDbTenistas] = useState([]);
  const [louder, setLouder] = useState(false);
  const [editarT, setEditarT] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setLouder(true);
    setTimeout(() => {
      obtenerDatos().then(setDbTenistas);
      setLouder(false);
    }, 3000);
  }, []);

  const clouseModal = () => {
    setModal(false);
  };

  const createTenista = (tenista) => {
    tenista.id = Date.now();
    enviarDatos(tenista).then((res) => console.log(res));
    setDbTenistas([...dbTenistas, tenista]);
  };

  const eliminarTenista = (id) => {
    let confirmacion = window.confirm(
      `Estas seguro que desea eliminar el registro con el ${id}`
    );
    eliminarDatos(id);
    if (confirmacion) {
      setDbTenistas(dbTenistas.filter((el) => el.id !== id));
    }
  };
  return (
    <div>
      <h1>JUGADORES DE TENIS CON TORNEOS DE GRAN SLAM </h1>
      <Formulario
        createTenista={createTenista}
        editarT={editarT}
        setEditarT={setEditarT}
      />
      {louder && <Loading />}
      <Table
        dbTenistas={dbTenistas}
        setDbTenistas={setDbTenistas}
        eliminarTenista={eliminarTenista}
        setEditarT={setEditarT}
        modal={modal}
        setModal={setModal}
        clouseModal={clouseModal}
      />
    </div>
  );
};
