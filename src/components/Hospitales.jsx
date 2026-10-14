import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ServiceHospitales from '../services/ServiceHospitales';

export default class Hospitales extends Component {
    service = new ServiceHospitales()

    state = {
        hospitales: []
    }

    cargarHospitales = () => {
        this.service.getHospitales().then((res) => {
            this.setState({
                hospitales: res
            })
        })
    }

    componentDidMount = () => {
        this.cargarHospitales()
    }

    render() {
        return (
            <div>
                <h1>Hospitales</h1>

                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.hospitales.map((hosp, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{hosp.idHospital}</td>
                                        <td>{hosp.nombre}</td>
                                        <td>{hosp.direccion}</td>
                                        <td>{hosp.telefono}</td>
                                        <td>{hosp.camas}</td>
                                        <td>
                                            <NavLink to={`/doctores/${hosp.idHospital}`} className='btn btn-info'>Ver doctores</NavLink>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
