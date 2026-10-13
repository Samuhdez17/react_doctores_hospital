import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import DetallesDoctor from './DetallesDoctor';

export default class Doctores extends Component {
    state = {
        doctores: [],
        nombreHospital: '',
        idDoctor: null,
    }

    cargarNombreHospital = () => {
        const url = Global.apiHopitales2
        const request = 'api/hospitales/' + this.props.idHospital;

        axios.get(url + request)
        .then((res) => {
            this.setState({
                nombreHospital: res.data.nombre
            })
        })
    }

    cargarDoctores = () => {
        const url = Global.apiDoctores
        const request = 'api/doctores/doctoreshospital/' + this.props.idHospital;

        axios.get(url + request)
        .then((res) => {
            this.setState({
                doctores: res.data
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
