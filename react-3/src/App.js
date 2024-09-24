import React,{Component} from "react";
import ContadorClases from "./components/ContadorClases";
import ContadorFuncional from "./components/ContadorFuncional";
import CicloVida from "./components/CicloVida";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     monstrarComponente: true,
    };
  }
  // este se ejecuta al dar click y va cambiando de true a false para montar o desmontar el componente
  toggleComponente = () => {
    this.setState((prevState) => ({
      mostrarComponente: !prevState.mostrarComponente,
    }));
  };

  render() {
    return (
      <div className="container">
      <div className="row d-flex justify-content-center">
        {/* ejercicio 1 */}
        <ContadorClases />
        <ContadorFuncional />
      </div>
      <div className="row d-flex justify-content-center">
        {/* ejercicio 2 */}
      <h1> Ciclo de Vida</h1>
        <button className="btn btn-secondary" onClick={this.toggleComponente}>
          {this.state.mostrarComponente ? "Ocultar Componente" : "Mostrar Componente"}
        </button>
        {/* si es true muestra componente si no, no muestra nada */}
        {this.state.mostrarComponente && <CicloVida />}
      </div>
    </div>
    );
  }
};


export default App;
