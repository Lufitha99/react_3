import React, { Component } from "react";

class CicloVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "¡Hola, mundo!",
    };
  }

  // al dar click en visibilidad true o mostrar componente se imprime en consola
  componentDidMount() {
    console.log("El componente se ha montado");
  }

  // Esto se ejecuta cada vez que se cambia el texto
  componentDidUpdate(prevProps, prevState) {
    if (prevState.mensaje !== this.state.mensaje) {
      console.log("El mensaje ha sido actualizado a:", this.state.mensaje);
    }
  }

  // Cuando en el componente padre se le da a ocultar el componente se desmonta
  componentWillUnmount() {
    console.log("El componente ha sido retirado");
  }

  // funcion que cambia el mensaje
  cambiarMensaje = () => {
    this.setState((prevState) => ({
      mensaje: prevState.mensaje === "¡Hola, mundo!" 
                ? "¡Has cambiado el mensaje!" 
                : "¡Hola, mundo!", // Regresa al estado original
    }));
  };

  render() {
    return (
      <div className="col-5 m-5 border p-5 border-black">
        <h1>Componente de Mensaje</h1>
        <h3>{this.state.mensaje}</h3>
        <button className="btn btn-primary" onClick={this.cambiarMensaje}>
          Cambiar Mensaje
        </button>
      </div>
    );
  }
}

export default CicloVida;