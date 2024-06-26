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

  // document.querySelectorAll(".item-auto").forEach((itemListado) => {
  //   console.log(itemListado, "hola");
  //   itemListado.addEventListener("click", () => {
  //     console.log(itemListado.id, "hola");
  //     document.location.replace(`detalle-auto.html?id=${itemListado.id}`);
  //   });
  // });

  const idClickAuto = document.getElementById("nombre");

  idClickAuto.addEventListener("click", () => {
    console.log(idClickAuto.dataset.id, "holaaa");
    const idAuto = idClickAuto.dataset.id
    document.location.replace(`detalle-auto.html?id=${idAuto}`)
  })

  const btnEliminar = document.getElementById("btn-eliminar");

  btnEliminar.addEventListener("click", () => {
    console.log(btnEliminar.dataset.id);
    const idAuto = btnEliminar.dataset.id;
    RequestsAPI.borrarAuto(idAuto)
      .then(()=> window.location.reload() )
      .catch(mostrarError);
  });
};
const mostrarError = (error) => {
  imprimir("lista-error", error);
};
RequestsAPI.getAutos().then(mostrarListaDeAutos).catch(mostrarError);
