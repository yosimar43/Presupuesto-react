import { useState } from "react";
import PropTypes from "prop-types";

import { Error } from "./Error";
import shortid from "shortid";

const Formulario = ({ setGasto, guardarCrearGasto }) => {
 const [nombre, setNombre] = useState("");
 const [gastoValor, setGastoValor] = useState(0);
 const [error, setError] = useState(false);

 const handlerValidation = () =>
  nombre.trim() === "" || gastoValor <= 1 || isNaN(gastoValor)
   ? setError(true)
   : setError(false);

 const handlerSubmit = event => {
  event.preventDefault();
  handlerValidation();
  const gasto = {
   nombre,
   gastoValor,
   id: shortid.generate(),
  };
  console.log(gasto);

  setGasto(gasto);
  guardarCrearGasto(true);
  setNombre("");
  setGastoValor(0);
 };

 return (
  <form onSubmit={handlerSubmit}>
   <h2>Agregar un gasto</h2>
   {error ? <Error message="Todos los campos son obligatorios" /> : null}
   <div className="campo">
    <label htmlFor="nombreGasto">Nombre gasto</label>
    <input
     autoComplete="off"
     type="text"
     className="u-full-width"
     placeholder="Ej. Transporte"
     name="nombreGasto"
     value={nombre}
     onChange={event => setNombre(event.target.value)}
    />
   </div>
   <div className="campo">
    <label htmlFor="cantidadGasto">Cantidad</label>
    <input
     autoComplete="off"
     type="number"
     className="u-full-width"
     placeholder="Ej. 10.000"
     name="cantidadGasto"
     value={gastoValor}
     onChange={event => setGastoValor(parseInt(event.target.value))}
    />
   </div>
   <input
    type="submit"
    value="Agregar gasto"
    className="button-primary u-full-width"
   />
  </form>
 );
};

export default Formulario;

Formulario.prototype = {
 setGasto: PropTypes.func.isRequired,
 guardarCrearGasto: PropTypes.func.isRequired,
};
