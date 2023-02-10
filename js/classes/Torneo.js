export class Torneo {
    constructor(nombre, maxEquipos, minEdad, cantEquipos) {
        this.nombre = nombre;
        this.maxEquipos = maxEquipos;
        this.minEdad = minEdad;
        this.cantEquipos = cantEquipos;
        this.equipos = [];
    }
    anadirEquipo(equipo) {
        return this.equipos.push(equipo);
    }
}

