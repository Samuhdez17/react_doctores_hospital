import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Doctores from './Doctores';

export default class Router extends Component {
    render() {
        function DoctoresElement() {
            const { idHospital } = useParams();

            return <Doctores idHospital={idHospital} />;
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/doctores/:idHospital' element={<DoctoresElement/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}