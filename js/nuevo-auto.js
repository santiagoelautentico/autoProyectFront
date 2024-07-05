import { RequestsAPI } from "../RequestApi.js";
import {
  imprimir,
  obtenerValorInput,
  validarSesion,
} from "../utils/functions.js";

validarSesion();

function usuarioHeader() {
  const userItem = document.querySelector(".user");
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user, "user");
  userItem.innerHTML = `Hola bienvenido, ${user.nombre}`;

  const btnLogout = document.querySelector(".logout");

  btnLogout.addEventListener("click", () => {
    sessionStorage.removeItem("session");
    window.location.replace("login.html");
  });
}

usuarioHeader();

const btnAgregar = document.getElementById("boton-nuevo-auto");

btnAgregar.addEventListener("click", () => {
  const marca = obtenerValorInput("marca");
  const modelo = obtenerValorInput("modelo");
  const condicion = obtenerValorInput("condicion");
  const año = obtenerValorInput("año");
  const color = obtenerValorInput("color");
  const precio = obtenerValorInput("precio");
  const imagen = obtenerValorInput("imagen");
  const imagen2 = obtenerValorInput("imagen2");
  const imagen3 = obtenerValorInput("imagen3");
  const imagen4 = obtenerValorInput("imagen4");
  const imagen5 = obtenerValorInput("imagen5");
  const planDePago = obtenerValorInput("planDePago");
  const motor = obtenerValorInput("motor");
  const puertas = obtenerValorInput("puertas");
  const Kilometros = obtenerValorInput("Kilometros");
  const NumeroDePlazas = obtenerValorInput("NumeroDePlazas");
  const PapelesAlDia = obtenerValorInput("papelesAlDia");
  const tipoDeCaja = obtenerValorInput("tipoDeCaja");
  const combustible = obtenerValorInput("combustible");
  const acercaDelAuto = obtenerValorInput("acercaDelAuto");

  if (
    !marca ||
    !modelo ||
    !condicion ||
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
    !Kilometros ||
    !NumeroDePlazas ||
    !PapelesAlDia ||
    !tipoDeCaja ||
    !combustible ||
    !acercaDelAuto
  ) {
    imprimir("lista-error", "Todos los campos son obligatorios");
    return;
  }

  const body = JSON.stringify({
    marca,
    modelo,
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
    Kilometros,
    NumeroDePlazas,
    PapelesAlDia,
    tipoDeCaja,
    combustible,
    acercaDelAuto,
  });

  RequestsAPI.postAuto(body)
    .then(
      () => window.location.reload(),
      console.log(body, "body"),
      console.log(condicion, "condicion")
    )
    .catch((error) => {
      imprimir("lista-error", error);
    });
});
