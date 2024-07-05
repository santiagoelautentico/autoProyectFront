import Auto from "../Models/Auto.js";
import { RequestsAPI } from "../RequestApi.js";
import { imprimir, validarSesion } from "../utils/functions.js";

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
