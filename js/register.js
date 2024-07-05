import {
  validarSesion,
  obtenerValorInput,
  imprimir,
} from "../utils/functions.js";
import { RequestsAPI } from "../RequestApi.js";
validarSesion();
document
  .querySelector("#boton-register-submit")
  .addEventListener("click", () => {
    const nombre = obtenerValorInput("form-register-nombre");
    const apellido = obtenerValorInput("form-register-apellido");
    const email = obtenerValorInput("form-register-email");
    const password = obtenerValorInput("form-register-password");
    if (!nombre || !apellido || !email || !password) {
      imprimir("form-register-error", "Por favor complete todos los campos");
      return;
    }
    const body = JSON.stringify({ nombre, apellido, email, password });
    RequestsAPI.register(body)
      .then(() => {
        document.location.replace("login.html");
      })
      .catch((error) => {
        imprimir("form-register-error", error);
      });
  });
