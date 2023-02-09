export function Torneo(nombre, maxEquipos, minEdad, cantEquipos) {
    this.nombre = nombre;
    this.maxEquipos = maxEquipos;
    this.minEdad = minEdad;
    this.cantEquipos = cantEquipos;
    this.equipos = [];
}

Torneo.prototype.anadirEquipo = function (equipo) {
    return this.equipos.push(equipo);
}