// "marca":"",
// "modelo":"",
// "año":"",
// "color":"",
// "precio":"",
// "imagen":"",
// "planDePago":"",
// "motor":"",
// "usado":"",
// "puertas":"",
// "Kilometros":"",
// "NumeroDePlazas":"",
// "PapelesAlDia":"",
// "tipoDeCaja":"",
// "combustible":"",
// "acercaDelAuto":""

export default class Auto {
  id;
  marca;
  modelo;
  año;
  color;
  precio;
  imagen;
  planDePago;
  motor;
  usado;
  puertas;
  kilometros;
  numeroDePlazas;
  papelesAlDia;
  tipoDeCaja;
  combustible;
  acercaDelAuto;

  constructor(
    id = 0,
    marca = "",
    modelo = "",
    año = 0,
    color = "",
    precio = 0,
    imagen = "",
    planDeAuto = "",
    motor = "",
    usado = false,
    puertas = 0,
    kilometros = 0,
    numeroDePlazas = 0,
    papelesAlDia = false,
    tipoDeCaja = "",
    combustible = "",
    acercaDelAuto = ""
  ) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio = precio;
    this.imagen = imagen;
    this.planDeAuto = planDeAuto;
    this.motor = motor;
    this.usado = usado;
    this.puertas = puertas;
    this.kilometros = kilometros;
    this.numeroDePlazas = numeroDePlazas;
    this.papelesAlDia = papelesAlDia;
    this.tipoDeCaja = tipoDeCaja;
    this.combustible = combustible;
    this.acercaDelAuto = acercaDelAuto;
  }

  mostrarEnLista() {
    // return /*html*/
    return /*html*/ `

    <tr id=${this.id} class="item-auto">
      <td class=${this.marca}></td>
      <td>${this.modelo}</td>
      <td>${this.año}</td>
      <td>${this.precio}</td>
      <td>${this.usado ? "Nuevo" : "Usado"}</td>
      <td>${this.kilometros}</td>
      <td class="icon_auto_container">
        <i class="fa-solid fa-trash-can icon-trash-auto" style="color: white; font-size: 1em"></i>
        <i class="fa-solid fa-pen-to-square icon-edit-auto" style="font-size: 1em"></i>
      </td>
    </tr>
    
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


// `
// //     <li class="item-auto">
// //       <div class="${this.marca} logo-marca"></div>
// //       <p>${this.modelo}</p>
// //       <p>${this.año}</p>
// //       <p>${this.precio}</p>
// //       <p>${this.usado ? "Usado" : "Nuevo"}</p>
// //       <p>${this.kilometros}</p>
// //       <div class="icons_auto-container">
// //         <i class="fa-solid fa-trash-can icon-trash" style="color: white; font-size: 1.5em"></i>
// //         <i class="fa-solid fa-pen-to-square icon-edit" style="font-size: 1.5em"></i>
// //       </div>
// //     </li>
// //   `;