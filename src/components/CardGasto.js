import PropTypes from 'prop-types';
import Gasto from "./Gasto"

const CardGasto = ({gastos}) => {
  return (
   <div className="gastos-realizados">
      <h2>Tus gastos son los siguientes</h2>
      {gastos.map(gasto => (
        <Gasto key={gasto.id}
        gasto={gasto}
        />
      ))}

   </div>   
  )
}

export default CardGasto

CardGasto.propTypes = {
  gastos: PropTypes.array.isRequired
}