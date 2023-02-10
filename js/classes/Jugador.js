export class Jugador {
  constructor(rut, nombre, apellido, anoNacimiento) {
    this.rut = rut;
    this.nombre = nombre;
    this.apellido = apellido;
    this.anoNacimiento = anoNacimiento;
  }
  esMayor() {
    let currentDate = new Date().getFullYear();
    if (currentDate - this.anoNacimiento >= 18) {
        return true;
    } else {
        return false;
    }
  }
}
