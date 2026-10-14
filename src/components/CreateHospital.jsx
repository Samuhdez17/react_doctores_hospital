import React, { Component } from 'react';
import Global from '../Global'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
    cajaId          = React.createRef();
    cajaNombre      = React.createRef()
    cajaDireccion   = React.createRef()
    cajaTelefono    = React.createRef()
    cajaCamas       = React.createRef()

    url = Global.apiHopitales2

    state = {
        mensaje: '',
        status: false,
    }

    crearHospital = (e) => {
        e.preventDefault()

        let idHospital  = parseInt(this.cajaId.current.value);
        let nombre      = this.cajaNombre.current.value;
        let direccion   = this.cajaDireccion.current.value;
        let telefono    = this.cajaTelefono.current.value;
        let camas       = parseInt(this.cajaCamas.current.value);

        const hospital = {
            idHospital:     idHospital,
            nombre:         nombre,
            direccion:      direccion,
            telefono:       telefono,
            camas:          camas
        }

        const request = 'api/hospitales'

        axios.post(this.url + request, hospital)
        .then((res) => {
            this.setState({
                mensaje: "Hospital creado correctamente",
                status: true,
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.status && (
                        <Navigate to='/hospitales' />
                    )
                }

                <h1>Formulario para crear hospital</h1>
                <h3> {this.state.mensaje} </h3>
                <form className='form-switch' onSubmit={ this.crearHospital }>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre} className='form-control' />

                    <label>Direccion: </label>
                    <input type="text" ref={this.cajaDireccion} className='form-control' />

                    <label>Telefono: </label>
                    <input type="text" ref={this.cajaTelefono} className='form-control' />

                    <label>Camas: </label>
                    <input type="number" ref={this.cajaCamas} className='form-control' />

                    <button className='btn btn-info'>Crear Hospital</button>
                </form>
            </div>
        );
    }
}
