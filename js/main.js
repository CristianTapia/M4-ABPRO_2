import { Equipo } from "./classes/Equipo.js";
import { Jugador } from "./classes/Jugador.js";
import { Torneo } from "./classes/Torneo.js";

// Crear torneo
let crearTorneo = document.getElementsByClassName('input-torneo');
let btnCrear = document.getElementById('btn-crear');
btnCrear.addEventListener('click', creacionTorneo);

function creacionTorneo() {
    let datosTorneo = [];
    for(let i = 0; i < crearTorneo.length; i++) {
        let llenarArreglo = datosTorneo.push(crearTorneo[i].value);
    }
    let nuevoTorneo = new Torneo(datosTorneo[0], datosTorneo[1], datosTorneo[2], datosTorneo[3]);
    console.log(nuevoTorneo);
}

// Agregar equipo
let agregarEquipo = document.getElementsByClassName('input-equipo');
let btnAgregar = document.getElementById('btn-agregar');
btnAgregar.addEventListener('click', inscribirEquipo);

function inscribirEquipo() {
    let datosEquipo = [];
    for(let i = 0; i < agregarEquipo.length; i++) {
        let llenarArreglo = datosEquipo.push(agregarEquipo[i].value);
        
    }
    let nuevoEquipo = new Equipo(datosEquipo[0], datosEquipo[1]);
    console.log(nuevoEquipo);
}

// Agregar jugadores
let agregarJugador = document.getElementsByClassName('input-jugador');
let btnAgregarJugador = document.getElementById('btn-agregar-jugador');
btnAgregarJugador.addEventListener('click', inscribirJugador);

function inscribirJugador() {
    let datosJugador = [];
    for(let i = 0; i < agregarJugador.length; i++) {
        let llenarArreglo = datosJugador.push(agregarJugador[i].value);
    }
    let nuevoJugador = new Jugador(datosJugador[0], datosJugador[1], datosJugador[2], datosJugador[3]);
    console.log(nuevoJugador);
}
