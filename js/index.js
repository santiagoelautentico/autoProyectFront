import Auto from "../Models/Auto.js";
import { RequestsAPI } from "../RequestApi.js";
import { imprimir, obtenerValorInput, validarSesion } from "../utils/functions.js";

validarSesion();

const userItem = document.querySelector(".user");
const user = JSON.parse(sessionStorage.getItem("user"));
console.log(user, "user");
userItem.innerHTML = `Hola bienvenido, ${user.nombre}`;

const btnLogout = document.querySelector(".logout");

btnLogout.addEventListener("click", () => {
  sessionStorage.removeItem("session");
  window.location.replace("login.html");
})

function mostrarListaDeAutos(data) {
  imprimir("lista-error", "");
  const listadoDeAutos = data
    .map((auto) =>
      new Auto(
        auto.id,
        auto.marca,
        auto.modelo,
        auto.condicion,
        auto.color,
        auto.año,
        auto.precio,
        auto.imagen,
        auto.imagen2,
        auto.imagen3,
        auto.imagen4,
        auto.imagen5,
        auto.planDePago,
        auto.motor,
        auto.puertas,
        auto.Kilometros,
        auto.numeroDePlazas,
        auto.papelesAlDia,
        auto.combustible,
        auto.acercaDelAuto
      ).mostrarEnLista()
    )
    .join("");
  imprimir("lista-autos", listadoDeAutos);

  let numeroAutos = data.length;

  imprimir("total-autos", `<h2>Total de autos: ${numeroAutos}</h2>`);

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
const inputBusqueda = document.querySelector(".input-buscar");
const btnBuscar = document.querySelector(".btn-buscar");

let filtroModelo = "";
let filtroMarca = "";
let filtroColor = "";
let filtroCondicion = "";
let filtroKilometros = "";

document.addEventListener("DOMContentLoaded", () => {
  const opcionFiltroMarcas = document.querySelectorAll(".opcionMarcas");
  opcionFiltroMarcas.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      if (localStorage.getItem("marcas")) {
        localStorage.removeItem("marcas");
      }
      localStorage.setItem("marcas", opcion.getAttribute("value"));
      filtroMarca = localStorage.getItem("marcas");

      imprimir(
        "filtrosApliMarcas",
        `<p class="filtros-aplicados"><spam class="filtros-aplicados-icon icon-marca"><i class="fa-solid fa-xmark"></i></spam> ${filtroMarca}</p>`
      );

      const iconMarca = document.querySelector(".icon-marca");

      if (iconMarca) {
        iconMarca.addEventListener("click", () => {
          localStorage.removeItem("marcas");
          imprimir("filtrosApliMarcas", "");
          RequestsAPI.getAutos({
            filtroModelo,
            filtroCondicion,
            filtroColor,
            filtroKilometros,
          })
            .then(mostrarListaDeAutos)
            .catch(mostrarError);
        });
      } else {
        console.error(
          "El elemento con la clase 'icon-marca' no se encontró en el DOM."
        );
      }
      RequestsAPI.getAutos({
        filtroModelo,
        filtroMarca,
        filtroCondicion,
        filtroColor,
        filtroKilometros,
      })
        .then(mostrarListaDeAutos)
        .catch(mostrarError);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const opcionFiltroColores = document.querySelectorAll(".opcionColores");

  opcionFiltroColores.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      if (localStorage.getItem("colores")) {
        localStorage.removeItem("colores");
      }

      localStorage.setItem("colores", opcion.getAttribute("value"));
      filtroColor = localStorage.getItem("colores");

      imprimir(
        "filtrosApliColores",
        `<p class="filtros-aplicados"><spam class="filtros-aplicados-icon icon-color"><i class="fa-solid fa-xmark"></i></spam> ${filtroColor}</p>`
      );

      const iconColor = document.querySelector(".icon-color");

      if (iconColor) {
        iconColor.addEventListener("click", () => {
          localStorage.removeItem("colores");
          imprimir("filtrosApliColores", "");
          RequestsAPI.getAutos({
            filtroMarca,
            filtroModelo,
            filtroCondicion,
            filtroKilometros,
          })
            .then(mostrarListaDeAutos)
            .catch(mostrarError);
        });
      } else {
        console.error(
          "El elemento con la clase 'icon-color' no se encontró en el DOM."
        );
      }

      RequestsAPI.getAutos({
        filtroModelo,
        filtroMarca,
        filtroCondicion,
        filtroColor,
        filtroKilometros,
      })
        .then(mostrarListaDeAutos)
        .catch(mostrarError);
    });
  });
});

btnBuscar.addEventListener("click", () => {
  let filtroModeloValue = inputBusqueda.value;
  filtroModelo = encodeURIComponent(filtroModeloValue);
  RequestsAPI.getAutos({
    filtroModelo,
  })
    .then(mostrarListaDeAutos)
    .catch(mostrarError);
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
