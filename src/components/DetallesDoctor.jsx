import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';

export default class DetallesDoctor extends Component {
    url = Global.apiDoctores

    state = {
        doctor: null
    }

    cargarDoctor = () => {
        const request = 'api/doctores/' + this.props.doctor;

        axios.get(this.url + request)
        .then((res) => {
            this.setState({
                doctor: res.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.doctor !== oldProps.doctor) {
            this.cargarDoctor();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.doctor && (
                        <div>
                            <h2>Doctor {this.state.doctor.apellido}</h2>

                            <ul>
                                <li>Especialidad: {this.state.doctor.especialidad}</li>
                                <li>Hospital: {this.props.nombreHospital}</li>
                                <li>Salario: {this.state.doctor.salario}</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        );
    }
}
