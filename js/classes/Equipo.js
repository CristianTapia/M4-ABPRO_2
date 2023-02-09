export function Equipo(nombre, poblacion, capitan) {
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.capitan = capitan;
    this.jugadores = [];
}

Equipo.prototype.agregarJugador = function(jugador) {
    return this.jugadores.push(jugador);
}