import Auto from "../Models/Auto.js";
import { RequestsAPI } from "../RequestApi.js";
import { imprimir, validarSesion } from "../utils/functions.js";

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

validarSesion();

const params = new URLSearchParams(window.location.search);
const idAuto = params.get("id");

const mostrarError = (error) => {
  imprimir("lista-error", error);
};

const mostrarDetalle = (data) => {
  const auto = new Auto(
    data.id,
    data.marca,
    data.modelo,
    data.condicion,
    data.año,
    data.color,
    data.precio,
    data.imagen,
    data.imagen2,
    data.imagen3,
    data.imagen4,
    data.imagen5,
    data.planDePago,
    data.motor,
    data.puertas,
    data.Kilometros,
    data.numeroDePlazas,
    data.papelesAlDia,
    data.tipoDeCaja,
    data.combustible,
    data.acercaDelAuto
  );
  imprimir("detalle", auto.mostrarDetalle());
};

RequestsAPI.getAuto(idAuto)
  .then(mostrarDetalle, console.log())
  .catch((error) => {
    mostrarError(error);
  });
