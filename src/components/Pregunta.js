import { useState } from "react";
import PropTypes from "prop-types";

import { Error } from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setShowQuestionBudget }) => {
 const [cantidad, setCantidad] = useState(0);

 const [error, setError] = useState(false);

 const definirPresupuesto = event => setCantidad(parseInt(event.target.value));

 const handleSubmit = event => {
  event.preventDefault();
  if (error) return;
  setShowQuestionBudget(false);
  setPresupuesto(cantidad);
  setRestante(cantidad);
 };

 return (
  <>
   <h2>Coloca tu presupuesto</h2>
   {error ? (
    <Error message="El presupuesto debe de ser un numero mayor a cero" />
   ) : null}
   <form onSubmit={handleSubmit}>
    <input
     type="number"
     name="presupuesto"
     className="u-full-width"
     placeholder="Coloca tu presupuesto"
     onChange={definirPresupuesto}
     onBlur={e =>
      e.target.value <= 0 || isNaN(e.target.value)
       ? setError(true)
       : setError(false)
     }
    />
    <input
     type="submit"
     className="button-primary u-full-width"
     value="Definir presupuesto"
    />
   </form>
  </>
 );
};

export default Pregunta;

Pregunta.prototype = {
 setPresupuesto: PropTypes.func.isRequired,
 setRestante: PropTypes.func.isRequired,
 setShowQuestionBudget: PropTypes.func.isRequired,
};
