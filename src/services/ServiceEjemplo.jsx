import axios from 'axios';

export default class ServiceEjemplo {
    getSaludo() {
        return "Hola desde el servicio";
    }

    getDia(nombre) {
        return `Buenos dias, ${nombre}. Hoy es ${new Date().toLocaleDateString()}`;
    }
}
