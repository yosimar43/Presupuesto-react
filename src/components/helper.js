export const revisarPresupuesto = ({presupuesto= 0, restante= 0}) => {
  let clase;

  if( ( presupuesto / 4 ) > restante ) {
      clase = 'alert alert-danger';
  } else if ( (presupuesto / 2) > restante ) {
      clase = 'alert alert-warning';
  } else {
      clase = 'alert alert-success';
  }

  return clase;
}