export const obtenerDatos = async () => {
  const listaJugadores = await fetch(" http://localhost:5000/jugadores", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (listaJugadores.ok) {
    return listaJugadores.json();
  }
};
export const enviarDatos = async (jugador) => {
  const jugadorEnviar = await fetch("http://localhost:5000/jugadores", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(jugador),
  });
  if (jugadorEnviar.ok) {
    return jugadorEnviar.json();
  }
};
export const editarDatos = async (jugador) => {
  const jugadorEditar = await fetch(
    `http://localhost:5000/jugadores/${jugador.id}`,
    {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(jugador),
    }
  );
  if (jugadorEditar.ok) {
    return jugadorEditar.json();
  }
};
export const eliminarDatos = async (id) => {
  const jugadorEliminar = await fetch(`http://localhost:5000/jugadores/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(),
  });
  if (jugadorEliminar.ok) {
    return jugadorEliminar.json();
  }
};
