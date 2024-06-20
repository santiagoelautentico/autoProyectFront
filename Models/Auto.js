export default class Auto {
    id;
    marca;
    modelo;
    color;
    precio;
    imagen;
    planDePago;
    motor;
    usado;
    otrosDatos;
  
    constructor(id = 0, marca = "", modelo = "", color = "", precio = 0, imagen = "", planDePago = "", motor = "", usado = false, otrosDatos = "") {
      this.id = id;
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.precio = precio;
      this.imagen = imagen;
      this.planDePago = planDePago;
      this.motor = motor;
      this.usado = usado;
      this.otrosDatos = otrosDatos;
    }
  
    mostrarEnLista() {
      return `
        <article class="card" id="${this.id}">
          <img class="img" src="${this.imagen}"></img>
          <div class="card-header">
            <div class="top">
              <h2 class="modelo">${this.modelo}</h2>
              <h2>${this.precio}</h2>
              </div>
              <h3>${this.marca}</h3>
          </div>
          <ul class="card-body">
          <li>${this.color}</li>
          <li>${this.motor}</li>
          <li>${this.usado}</li>
          <li>${this.planDePago}</li>
          <li>${this.otrosDatos}</li>
          
          </ul>
        </article>
      `
    }
  
    // mostrarDetalle() {
    //   return `
    //     <tr><td><b>ID</b></td><td>${this.id}</td></tr>
    //     <tr><td><b>Nombre</b></td><td>${this.nombre}</td></tr>
    //       <tr><td><b>Tipo</b></td><td>${this.tipo}</td></tr>
    //       <tr><td><b>Raza</b></td><td>${this.raza}</td></tr>
    //   `;
    // }
}


// `
//         <tr class="item-lista-mascota" id="${this.id}">
//           <td>${this.id}</td>
//           <td>${this.marca}</td>
//           <td>${this.modelo}</td>
//           <td>${this.color}</td>
//           <td>${this.precio}</td>
//           <td>${this.imagen}</td>
//           <td>${this.planDePago}</td>
//           <td>${this.motor}</td>
//           <td>${this.usado}</td>
//           <td>${this.otrosDatos}</td>
//         </tr>
//       `;