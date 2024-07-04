const obtenerUrl = (ruta) => `${RequestsAPI.urlBaseBackend}/${ruta}`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const token = sessionStorage.getItem("session");
if (token) {
  headers.authorization = token;
}
const procesarRespuesta = (res) => {
  return res.json().then((data) => {
    if (data.error) {
      throw new Error(data?.error);
    }

    return data;
  });
};

const manejarErrores = (error = new Error("Error desconocido")) => {
  console.error("Ha ocurrido un error:", error.message);
  throw error.message;
};

export class RequestsAPI {
  static urlBaseBackend = "https://autoproyectbackend.onrender.com";

  static getAutos(opciones = {}) {
    const queryParams = new URLSearchParams({});
    if( opciones.filtroModelo){
      queryParams.set("modelo", opciones.filtroModelo);
    }
    if (opciones.filtroMarca) {
      queryParams.set("marca", opciones.filtroMarca);
    }
    if (opciones.filtroCondicion) {
      queryParams.set("condicion", opciones.filtroCondicion);
    }
    if (opciones.filtroColor) {
      queryParams.set("color", opciones.filtroColor);
    }
    if (opciones.filtroKilometros) {
      queryParams.set("kilometros", opciones.filtroKilometros);
    }
    return fetch(obtenerUrl("autos?" + queryParams), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static getAuto(idAuto) {
    return fetch(obtenerUrl(`auto/${idAuto}`), { headers })
      .then(procesarRespuesta, console.log("error"))
      .catch(manejarErrores);
  }

  static borrarAuto(idAuto) {
    return fetch(obtenerUrl(`auto/${idAuto}`), {
      method: "DELETE",
      headers,
    })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static postAuto(body) {
    return fetch(obtenerUrl("auto"), { method: "POST", body, headers })
      .then(procesarRespuesta, console.log(body, "body"))
      .catch(manejarErrores);
  }

  static putAuto(
    idAuto,
    modelo,
    marca,
    año,
    color,
    precio,
    imagen,
    planDePago,
    motor,
    usado,
    nuevo,
    puertas,
    kilometros,
    numeroDePlazas,
    papelesAlDia,
    combustible,
    acercaDelAuto
  ) {
    const body = JSON.stringify({
      modelo,
      marca,
      año,
      color,
      precio,
      imagen,
      planDePago,
      motor,
      usado,
      nuevo,
      puertas,
      kilometros,
      numeroDePlazas,
      papelesAlDia,
      combustible,
      acercaDelAuto,
    });

    return fetch(obtenerUrl(`auto/${idAuto}`), {
      method: "PUT",
      body,
      headers,
    })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static login(email, password) {
    const body = JSON.stringify({ email, password });

    return fetch(obtenerUrl("login"), { method: "POST", body, headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }
}
