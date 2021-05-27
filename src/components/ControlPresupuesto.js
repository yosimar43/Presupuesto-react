import PropTypes from "prop-types";
import { revisarPresupuesto } from "./helper";

const ControlPresupuesto = ({ presupuesto, restante }) => {
 return (
  <>
   <div className="alert alert-primery">
    <p>Presupuesto: $ {presupuesto}</p>
   </div>
   <div className={revisarPresupuesto({ presupuesto, restante })}>
    <p>Restante: ${restante}</p>
   </div>
  </>
 );
};

export default ControlPresupuesto;

ControlPresupuesto.prototype = {
 presupuesto: PropTypes.number.isRequired,
 restante: PropTypes.number.isRequired,
};
