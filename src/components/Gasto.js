import PropTypes from 'prop-types';


const Gasto = ({gasto}) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}
        <span className="gasto">$ {gasto.gastoValor} </span>
      </p>
      
    </li>
  )
}

export default Gasto

Gasto.propTypes= {
  gasto: PropTypes.object.isRequired
}