export class Equipo {
    constructor(nombre, poblacion, capitan) {
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.capitan = capitan;
        this.jugadores = [];
    }
    anadirJugador(jugador) {
        return this.jugadores.push(jugador);
    }
}