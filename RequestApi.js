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
  static urlBaseBackend = "http://localhost:3001";

  static getAutos(opciones = {}) {
    return fetch(obtenerUrl("autos"), { headers })
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
