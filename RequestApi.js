const obtenerUrl = (ruta) => `${RequestsAPI.urlBaseBackend}/${ruta}`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
// const token = sessionStorage.getItem("session");
const token = 'wppz4kyvck' 
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
}
