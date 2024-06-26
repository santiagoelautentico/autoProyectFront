import { RequestsAPI } from "../RequestApi.js";
import { imprimir, obtenerValorInput, validarSesion } from "../utils/functions.js";

validarSesion();

document.querySelector("#boton-nuevo-auto").addEventListener("click", () => {
    const marca = obtenerValorInput("marca");
    const modelo = obtenerValorInput("modelo");
    const año = obtenerValorInput("año");
    const color = obtenerValorInput("color");
    const precio = obtenerValorInput("precio");
    const imagen = obtenerValorInput("imagen");
    const planDePago = obtenerValorInput("planDePago");
    const motor = obtenerValorInput("motor");
    const usado = obtenerValorInput("usado");
    const puertas = obtenerValorInput("puertas");
    const kilometros = obtenerValorInput("kilometros");
    const numeroDePlazas = obtenerValorInput("numeroDePlazas");
    const papelesAlDia = obtenerValorInput("papelesAlDia");
    const combustible = obtenerValorInput("combustible");
    const acercaDelAuto = obtenerValorInput("acercaDelAuto");

    if (!marca || !modelo || !año || !color || !precio || !imagen || !planDePago || !motor || !usado || !puertas || !kilometros || !numeroDePlazas || !papelesAlDia || !combustible || !acercaDelAuto) {
        imprimir("lista-error", "Todos los campos son obligatorios");
        return;
    };

    const body = JSON.stringify({ marca, modelo, año, color, precio, imagen, planDePago, motor, usado, puertas, kilometros, numeroDePlazas, papelesAlDia, combustible, acercaDelAuto });

    RequestsAPI.postAuto(body)
        .then(() => window.location.reload())
        .catch((error) => {
            imprimir("lista-error", error);
        });

});

