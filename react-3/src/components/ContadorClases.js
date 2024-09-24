import React, {Component} from "react";

class ContadorClases extends Component {
  constructor(props) {
    super(props);
    // Agregre otro contador aqui que en vez de aumentar decrezca
    this.state = {
      contador: 0,
      contador2: 100,
    };
  }
// este se encarga del contador 1
  incrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

// funcion decrementar contador 2
  decrementar = () => {
    this.setState((prevState) => ({
      contador2: prevState.contador2 - 1,
    }));
  };

// volver ambos estados a su valor original
resetear = ()=>{
    this.setState(() => ({
        contador: 0,
        contador2 : 100
    }))
}
  render() {
    return (
      <div className="col-5 m-5 border p-5 border-black">
        <h1>Contador Clases</h1>
        <h3>El contador 1 va en: {this.state.contador}</h3>
        <h3>El contador 2 va en: {this.state.contador2}</h3>
        <div className="row justify-content-center d-flex">
            <button className="btn btn-primary m-2" onClick={this.incrementar}>Incrementar contador 1</button>
            <button className="btn btn-secondary m-2" onClick={this.decrementar}>Decrementar contador 2</button>
            <button className="btn btn-danger m-2" onClick={this.resetear}>Resetear ambos</button>
        </div>
      </div>
    );
  }
}
export default ContadorClases;