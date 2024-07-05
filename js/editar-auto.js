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
  document.querySelector("#editar-condicion").value = data.condicion;
  document.querySelector("#editar-color").value = data.color;
  document.querySelector("#editar-precio").value = data.precio;
  document.querySelector("#editar-imagen").value = data.imagen;
  document.querySelector("#editar-imagen2").value = data.imagen2;
  document.querySelector("#editar-imagen3").value = data.imagen3;
  document.querySelector("#editar-imagen4").value = data.imagen4;
  document.querySelector("#editar-imagen5").value = data.imagen5;
  document.querySelector("#editar-planDePago").value = data.planDePago;
  document.querySelector("#editar-motor").value = data.motor;
  document.querySelector("#editar-puertas").value = data.puertas;
  document.querySelector("#editar-kilometros").value = data.Kilometros;
  document.querySelector("#editar-numeroDePlazas").value = data.NumeroDePlazas;
  document.querySelector("#editar-papelesAlDia").value = data.PapelesAlDia;
  document.querySelector("#editar-tipoDeCaja").value = data.tipoDeCaja;
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
  const condicion = obtenerValorInput("editar-condicion");
  const año = obtenerValorInput("editar-año");
  const color = obtenerValorInput("editar-color");
  const precio = obtenerValorInput("editar-precio");
  const imagen = obtenerValorInput("editar-imagen");
  const imagen2 = obtenerValorInput("editar-imagen2");
  const imagen3 = obtenerValorInput("editar-imagen3");
  const imagen4 = obtenerValorInput("editar-imagen4");
  const imagen5 = obtenerValorInput("editar-imagen5");
  const planDePago = obtenerValorInput("editar-planDePago");
  const motor = obtenerValorInput("editar-motor");
  const puertas = obtenerValorInput("editar-puertas");
  const kilometros = obtenerValorInput("editar-kilometros");
  const numeroDePlazas = obtenerValorInput("editar-numeroDePlazas");
  const papelesAlDia = obtenerValorInput("editar-papelesAlDia");
  const tipoDeCaja = obtenerValorInput("editar-tipoDeCaja");
  const combustible = obtenerValorInput("editar-combustible");
  const acercaDelAuto = obtenerValorInput("editar-acercaDelAuto");

  if (
    !marca ||
    !modelo ||
    !año ||
    !color ||
    !precio ||
    !imagen ||
    !imagen2 ||
    !imagen3 ||
    !imagen4 ||
    !imagen5 ||
    !planDePago ||
    !motor ||
    !puertas ||
    !kilometros ||
    !numeroDePlazas ||
    !papelesAlDia ||
    !tipoDeCaja ||
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
    condicion,
    año,
    color,
    precio,
    imagen,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    planDePago,
    motor,
    puertas,
    kilometros,
    numeroDePlazas,
    papelesAlDia,
    tipoDeCaja,
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