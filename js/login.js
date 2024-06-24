import { RequestsAPI } from "../RequestApi.js";
import {
  obtenerValorInput,
  imprimir,
  validarSesion,
} from "../utils/functions.js";

// validamos la sesion del usuario
validarSesion();
// obtenemos el boton de login
const botonLogin = document.querySelector("#btn-login");

// agregamos el evento click al boton de login
botonLogin.addEventListener("click", () => {
  // obtener el user y password del formulario
  const email = obtenerValorInput("inp-email");
  const password = obtenerValorInput("inp-password");

  // hacer el fetch, usando el metodo login de request api
  RequestsAPI.login(email, password)
    .then((data) => {
      //    si el login es exitoso, lo guardamos en el session storage
      sessionStorage.setItem("session", data.session);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        console.log(sessionStorage.getItem("user"));

      // redirigimos al usaurio al index
      document.location.replace("home.html");
    })
    .catch((error) => {
      // si hay un error, lo mostramos en la consola y en el formulario
      console.error(error);
      imprimir("error-login", "Email o contraseña incorrectos");
    });
});
