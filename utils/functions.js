export const obtenerValorInput = (idInput) => document.getElementById(idInput).value;

export const imprimir =(elemento, contenido) =>{
    document.querySelector(`#${elemento}`).innerHTML = contenido;
}

export const validarSesion = () => {
    // obtenemos el valor de la sesion del sessionStorage
    const usuarioLogueado = sessionStorage.getItem("session");
    // verificamos si estamos en la pagina de login o register
    const estaEnLogin = document.location.pathname.includes("login.html");
    const estaEnRegister = document.location.pathname.includes("register.html");
    const estaEnPaginaPublica = estaEnLogin || estaEnRegister;
  
    // si el usuario esta logueado y esta en una pagina publica, lo redirigimos al index
    if (usuarioLogueado) {
      if (estaEnPaginaPublica) {
        document.location.replace("home.html");
      }
    } else {
      // si no estas logueado,y esta en una pagina restringida, redirigimos al login
      if (!estaEnPaginaPublica) {
        document.location.replace("login.html");
      }
    }
  };