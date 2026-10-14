import React, { Component } from 'react';
import ServiceEjemplo from '../services/ServiceEjemplo';

export default class EjemploParaService extends Component {
    service = new ServiceEjemplo()

    state = {
        msg1: '',
        msg2: '',
        comics: [],
    }

    cargarMensajes = () => {
        this.setState({
            msg1: this.service.getSaludo(),
            msg2: this.service.getDia('Juan'),
            comics: this.service.getComics()
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

                <h2>Comics</h2>
                <div className="row d-flex justify-content-center">
                    {
                        this.state.comics.map((c,i) => {
                            return (
                                <div key={i} className="m-2">
                                    <h3> {c.titulo} </h3>
                                    <img src={c.imagen} alt='imagen comic' width="180px" height='200px' />
                                    <p> {c.descripcion} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
