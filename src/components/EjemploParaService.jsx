import React, { Component } from 'react';
import ServiceEjemplo from '../services/ServiceEjemplo';

export default class EjemploParaService extends Component {
    service = new ServiceEjemplo()

    state = {
        msg1: '',
        msg2: '',
    }

    cargarMensajes = () => {
        this.setState({
            msg1: this.service.getSaludo(),
            msg2: this.service.getDia('Juan'),
        })
    }   

    componentDidMount = () => {
        this.cargarMensajes()
    }

    render() {
        return (
            <div>
                <h1>Ejemplo service</h1>

                <h2> {this.state.msg1} </h2>
                <h2> {this.state.msg2} </h2>
            </div>
        );
    }
}
