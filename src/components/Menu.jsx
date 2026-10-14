import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Global from '../Global'

export default class Menu extends Component {
    url = Global.apiHopitales2

    state = {
        hospitales: []
    }

    cargarHospitales = () => {
        const request = 'webresources/hospitales'
        const request2 = 'api/hospitales'

        axios.get(this.url + request2)
        .then((res) => {
            this.setState({
                hospitales: res.data
            })
        })
    }

    componentDidMount() {
        this.cargarHospitales()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/hospitales'>Hospitales</NavLink>
                            </li>

                            <li>
                                <NavLink className="nav-link" to='/create_hospital'>Crear Hospital</NavLink>
                            </li>

                            <li>
                                <NavLink className="nav-link" to='/ejemplos'>Ejemplo service</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hospitales
                                </a>
                                
                                <ul className="dropdown-menu">
                                    {
                                        this.state.hospitales.map((hos, i) => {
                                            return (
                                                <li key={i}>
                                                    <NavLink className='dropdown-item'
                                                        to={'/doctores/' + hos.idHospital}>
                                                        {hos.nombre}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }

                                    {/* <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
