import axios from 'axios';
import Global from '../Global';

export default class ServiceHospitales {
    // EJEMPLO DE PROMESA OBJETO
    getPromesa = new Promise(function(resolve, reject) {
        let num = 0

        if (num === 0) {
            resolve('Todo correcto')
        } else {
            reject('Todo mal')
        }
    })

    // EJEMPLO DE PROMESA METODO
    getHospitales() {
        return new Promise(function(resolve) {
            let url = Global.apiHopitales2
            let request = '/api/hospitales'

            axios.get(url + request)
            .then((res) => {
                resolve(res.data)
            })
        })
    }

    getDoctores(idHospital) {
        return new Promise(function(resolve) {
            let url = Global.apiDoctores
            let request = `api/doctores/doctoreshospital/${idHospital}`

            axios.get(url + request)
            .then((res) => {
                resolve(res.data)
            })
        })
    }

    getNombreHospital(idHospital) {
        return new Promise(function(resolve) {
            const url = Global.apiHopitales2
            const request = 'api/hospitales/' + idHospital;

            axios.get(url + request)
            .then((res) => {
                resolve(res.data.nombre)
            })
        })
    }

    crearHospital(hospital) {
        let url = Global.apiHopitales2
        
        return new Promise(function(resolve) {
            const request = 'api/hospitales'

            axios.post(url + request, hospital)
            .then((res) => {
                resolve(res)
            })
        })
    }
}
