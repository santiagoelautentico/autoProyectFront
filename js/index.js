import Auto from "../Models/Auto.js";
import { RequestsAPI } from "../RequestApi.js";
import { imprimir, obtenerValorInput } from "../utils/functions.js";

function mostrarListaDeAutos(data) {
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

  const borrarAuto = document.querySelectorAll(".btn-eliminar");
  borrarAuto.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idAuto = btn.dataset.id;
      RequestsAPI.borrarAuto(idAuto)
        .then(() => window.location.reload())
        .catch(mostrarError);
    });
  });

  document.querySelectorAll(".auto").forEach((itemListado) => {
    itemListado.addEventListener("click", function (e) {
      e.preventDefault();
      document.location.replace(`detalle-auto.html?id=${itemListado.id}`);
    });
  });
  document.querySelectorAll(".btn-editar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idAuto = btn.dataset.id;
      document.location.replace(`editar-auto.html?id=${idAuto}`);
    });
  });
}
// const menuFiltro = document.querySelector(".select-menu");
const opcionFiltroMarcas = document.querySelectorAll(".opcionMarcas");
const opcionFiltroColores = document.querySelectorAll(".opcionColores");
// const filtrarBtn = document.getElementById("btn-filtrar");
let filtroMarca = "";
let filtroColor = "";
let filtroCondicion = "";
let filtroKilometros = "";
opcionFiltroMarcas.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    if (localStorage.getItem("marcas")) {
      localStorage.removeItem("marcas");
    }
    localStorage.setItem("marcas", opcion.getAttribute("value"));
    filtroMarca = localStorage.getItem("marcas");
    console.log(filtroMarca);
    RequestsAPI.getAutos({
      filtroMarca,
      filtroCondicion,
      filtroColor,
      filtroKilometros,
    })
      .then(mostrarListaDeAutos)
      .catch(mostrarError);
  });
});
opcionFiltroColores.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    if (localStorage.getItem("colores")) {
      localStorage.removeItem("colores");
    }

    localStorage.setItem("colores", opcion.getAttribute("value"));
    filtroColor = localStorage.getItem("colores");
    console.log(filtroColor);
    RequestsAPI.getAutos({
      filtroMarca,
      filtroCondicion,
      filtroColor,
      filtroKilometros,
    })
      .then(mostrarListaDeAutos)
      .catch(mostrarError);
  });
});

const reiniciarFiltros = document.querySelector(".reiniciarFiltros");

reiniciarFiltros.addEventListener("click", () => {
  localStorage.removeItem("marcas");
  localStorage.removeItem("colores");
  window.location.reload();
});

const mostrarError = (error) => {
  imprimir("lista-error", error);
};
RequestsAPI.getAutos().then(mostrarListaDeAutos).catch(mostrarError);

// document.querySelector("#btn-filtrar").addEventListener("click", () => {
//   const filtroMarca = obtenerValorInput("marcas-select");
//   const filtroCondicion = obtenerValorInput("condicion-select");
//   const filtroColor = obtenerValorInput("color-select");
//   const filtroKilometros = obtenerValorInput("kilometros-select");

//   console.log("algo", filtroMarca);

//   RequestsAPI.getAutos({ filtroMarca, filtroCondicion, filtroColor, filtroKilometros })
//     .then(mostrarListaDeAutos, console.log("request"))
//     .catch(mostrarError);
// });
