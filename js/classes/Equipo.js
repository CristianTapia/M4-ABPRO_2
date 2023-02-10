export class Equipo {
    constructor(nombre, poblacion, capitan) {
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.capitan = capitan;
        this.jugadores = [];
    }
    anadirJugador(jugador) {
        if (this.jugadores.length < 15) {
            console.log(this.jugadores)
            return this.jugadores.push(jugador);
        } else {
            return alert('No se pueden inscribir más jugadores');
        }
    }
    jugadorInscrito(rut) {
        for (let i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i] != rut) {
                return true;
            } else {
                return alert('Jugador inscrito en otro equipo');
            }
        } 
    }
}