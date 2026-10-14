import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import ServiceHospitales from '../services/ServiceHospitales';

export default class CreateHospital extends Component {
    service = new ServiceHospitales()

    cajaId          = React.createRef()
    cajaNombre      = React.createRef()
    cajaDireccion   = React.createRef()
    cajaTelefono    = React.createRef()
    cajaCamas       = React.createRef()

    state = {
        mensaje: '',
        status: false,
    }

    crearHospital = (e) => {
        e.preventDefault()

        const hospital = {
            nombre:         this.cajaNombre.current.value,
            direccion:      this.cajaDireccion.current.value,
            telefono:       this.cajaTelefono.current.value,
            camas:          parseInt(this.cajaCamas.current.value),
        }

        this.service.crearHospital(hospital)
        .then(() => {
            this.setState({
                mensaje: 'Hospital creado correctamente',
                status: true
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
