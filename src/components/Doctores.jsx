import React, { Component } from 'react';
import DetallesDoctor from './DetallesDoctor';
import ServiceHospitales from '../services/ServiceHospitales';

export default class Doctores extends Component {
    service = new ServiceHospitales()

    state = {
        doctores: [],
        nombreHospital: '',
        idDoctor: null,
    }

    cargarNombreHospital = () => {
        this.service.getNombreHospital(this.props.idHospital).then((res) => {
            this.setState({
                nombreHospital: res
            })
        })
    }

    cargarDoctores = () => {
        this.service.getDoctores(this.props.idHospital).then((res) => {
            this.setState({
                doctores: res
            })
        })
    }

    mostrarDetalles = (idDoctor) => {
        this.setState({
            idDoctor: idDoctor
        })
    }

    componentDidMount = () => {
        this.cargarNombreHospital();
        this.cargarDoctores();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.idHospital !== oldProps.idHospital) {
            this.cargarNombreHospital();
            this.cargarDoctores();

            this.setState({
                idDoctor: null
            })
        }
    }

    render() {
        return (
            <div className='table-responsive'>
                <h1>Doctores del hospital {this.state.nombreHospital}</h1>

                <table className='table table-striped table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        this.state.doctores.map((doc, i) => {
                            return (
                                <tr key={i}>
                                    <td>{doc.apellido}</td>
                                    <td>{doc.especialidad}</td>

                                    <td>
                                        <button onClick={() => this.mostrarDetalles(doc.idDoctor)}>Mostrar detalles</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                
                {
                    this.state.idDoctor && (
                        <DetallesDoctor doctor={this.state.idDoctor} nombreHospital={this.state.nombreHospital}/>
                    )
                }
            </div>
        );
    }
}
