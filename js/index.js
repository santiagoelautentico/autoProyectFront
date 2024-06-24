import Auto from "../Models/Auto.js";
import { RequestsAPI } from "../RequestApi.js";
import { imprimir } from "../utils/functions.js";

const mostrarListaDeAutos = (data) => {
  imprimir("lista-error", "");
  const listadoDeAutos = data
    .map((auto) =>
      new Auto(
        auto.id,
        auto.marca,
        auto.modelo,
        auto.año,
        auto.color,
        auto.precio,
        auto.imagen,
        auto.planDePago,
        auto.motor,
        auto.usado,
        auto.puertas,
        auto.kilometros,
        auto.kilometros,
        auto.numeroDePlazas,
        auto.papelesAlDia,
        auto.combustible,
        auto.acercaDelAuto
      ).mostrarEnLista()
    )
    .join("");
  imprimir("lista-autos", listadoDeAutos);
};
const mostrarError = (error) => {
  imprimir("lista-error", error);
};
RequestsAPI.getAutos().then(mostrarListaDeAutos).catch(mostrarError);
