import React, { useState } from "react";

const ContadorFuncional = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador( contador + 1);

  };

  const resetear = () => {
    setContador(0)
  }


  return (
    <div className="col-5 m-5 border p-5 border-black">
      <h1>Contador funcional</h1>
      <h3>El contador va en: {contador}</h3>
      <div className="row justify-content-center d-flex">
        <button className="btn btn-primary m-2" onClick={incrementar}> Incrementar </button>
        <button className="btn btn-danger m-2" onClick={resetear}> Resetear </button>        
      </div>
    </div>
  );
};
export default ContadorFuncional;