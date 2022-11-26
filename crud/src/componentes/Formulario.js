import React, { useState } from "react";

const tenistaInicial = { name: "", torneo: "", id: null };

const Formulario = ({ createTenista, editarTenista, editarT, setEditarT }) => {
  const [tenista, setTenista] = useState(tenistaInicial);

  const handleChange = (e) => {
    setTenista({
      ...tenista,
      [e.target.name]: e.target.value,
    });
    //console.log(tenista);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tenista.name || !tenista.torneo) {
      alert("Debe completar los campo");
      return;
    }
    createTenista(tenista);
    handleReset();
  };
  const handleReset = (e) => {
    setTenista(tenistaInicial);
    setEditarT(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3  "
          type="text"
          placeholder="ingrese jugador"
          name="name"
          value={tenista.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3 "
          type="text"
          placeholder="ingrese torneo"
          name="torneo"
          value={tenista.torneo}
          onChange={handleChange}
        />
        <button type="submit" className=" btn btn-primary me-3 mb-3  ">
          Enviar
        </button>
        <button
          type="reset"
          className="btn btn-secondary mb-3"
          onClick={handleReset}
        >
          Resetear
        </button>
      </form>
    </div>
  );
};

export default Formulario;
