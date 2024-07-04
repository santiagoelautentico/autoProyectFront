import {
  imprimir,
  obtenerValorInput,
  validarSesion,
} from "../utils/functions.js";
import { RequestsAPI } from "../RequestApi.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idAuto = params.get("id");

const mostrarError = (error) => {
  imprimir("lista-error", error);
};

const popularCampos = (data) => {
  document.querySelector("#editar-marca").value = data.marca;
  document.querySelector("#editar-modelo").value = data.modelo;
  document.querySelector("#editar-año").value = data.año;
  document.querySelector("#editar-color").value = data.color;
  document.querySelector("#editar-precio").value = data.precio;
  document.querySelector("#editar-imagen").value = data.imagen;
  document.querySelector("#editar-planDePago").value = data.planDePago;
  document.querySelector("#editar-motor").value = data.motor;
  document.querySelector("#editar-puertas").value = data.puertas;
  document.querySelector("#editar-kilometros").value = data.Kilometros;
  document.querySelector("#editar-numeroDePlazas").value = data.NumeroDePlazas;
  document.querySelector("#editar-papelesAlDia").value = data.papelesAlDia;
  document.querySelector("#editar-combustible").value = data.combustible;
  document.querySelector("#editar-acercaDelAuto").value = data.acercaDelAuto;
};

RequestsAPI.getAuto(idAuto)
  .then(popularCampos)
  .catch((error) => {
    mostrarError(error);
  });

document.querySelector("#boton-editar-auto").addEventListener("click", () => {
  const marca = obtenerValorInput("editar-marca");
  const modelo = obtenerValorInput("editar-modelo");
  const año = obtenerValorInput("editar-año");
  const color = obtenerValorInput("editar-color");
  const precio = obtenerValorInput("editar-precio");
  const imagen = obtenerValorInput("editar-imagen");
  const planDePago = obtenerValorInput("editar-planDePago");
  const motor = obtenerValorInput("editar-motor");
  const condicion = obtenerValorInput("editar-condicion");
  const puertas = obtenerValorInput("editar-puertas");
  const kilometros = obtenerValorInput("editar-kilometros");
  const numeroDePlazas = obtenerValorInput("editar-numeroDePlazas");
  const papelesAlDia = obtenerValorInput("editar-papelesAlDia");
  const combustible = obtenerValorInput("editar-combustible");
  const acercaDelAuto = obtenerValorInput("editar-acercaDelAuto");

  if (
    !marca ||
    !modelo ||
    !año ||
    !color ||
    !precio ||
    !imagen ||
    !planDePago ||
    !motor ||
    !puertas ||
    !kilometros ||
    !numeroDePlazas ||
    !papelesAlDia ||
    !combustible ||
    !acercaDelAuto
  ) {
    imprimir("lista-error", "Todos los campos son obligatorios");
    return;
  }

  RequestsAPI.putAuto(
    idAuto,
    modelo,
    marca,
    año,
    color,
    precio,
    imagen,
    planDePago,
    motor,
    condicion,
    puertas,
    kilometros,
    numeroDePlazas,
    papelesAlDia,
    combustible,
    acercaDelAuto
  )
    .then(() => {
      document.location.replace("home.html");
    })
    .catch((error) => {
      mostrarError(error);
    });
});
