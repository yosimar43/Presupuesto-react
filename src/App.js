import { useState, useEffect } from "react";


import Formulario from "./components/Formulario";
import Pregunta from "./components/Pregunta";
import CardGasto from "./components/CardGasto";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
 const [presupuesto, setPresupuesto] = useState(0);
 const [restante, setRestante] = useState(0);
 const [showQuestionBudget, setShowQuestionBudget] = useState(true);
 const [gastos, guardarGastos] = useState([]);
 const [gasto, setGasto] = useState({})
 const [creargasto, guardarCrearGasto] = useState(false)
 
 useEffect(() => {

  if(creargasto){
    guardarGastos([...gastos, gasto]);

    const presupuestorestantte = restante-gasto.gastoValor;

    setRestante(presupuestorestantte)

    guardarCrearGasto(false)
  }
  
 }, [creargasto, gasto, gastos, restante])


 return (
  <div>
   <header>
    <h1>Gastos Semanales</h1>
    <div className=" contenido contenido-principal">
     {showQuestionBudget ? (
      <Pregunta
       setPresupuesto={setPresupuesto}
       setRestante={setRestante}
       setShowQuestionBudget={setShowQuestionBudget}
      />
     ) : (
      <div className="row">
       <div className="one-half column">
        <Formulario setGasto={setGasto}  guardarCrearGasto={guardarCrearGasto}/>
       </div>
       <div className="one-half column">
        <CardGasto gastos={gastos} />
        <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
       </div>
      </div>
     )}
    </div>
   </header>
  </div>
 );
}

export default App;
