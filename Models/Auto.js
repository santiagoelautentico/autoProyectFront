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
  condicion;
  puertas;
  Kilometros;
  numeroDePlazas;
  papelesAlDia;
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
    condicion = false,
    puertas = 0,
    Kilometros = 0,
    numeroDePlazas = 0,
    papelesAlDia = false,
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
    this.condicion = condicion;
    this.puertas = puertas;
    this.Kilometros = Kilometros;
    this.numeroDePlazas = numeroDePlazas;
    this.papelesAlDia = papelesAlDia;
    this.combustible = combustible;
    this.acercaDelAuto = acercaDelAuto;
  }

  mostrarEnLista() {
    console.log(this.puertas);
    return /*html*/ `
      <div class="auto" id=${this.id}>
        <div class=${this.marca}></div>
        <h3>${this.modelo}</h3>
        <h3>U$D ${this.precio}</h3>
        <h3>${this.año}</h3>
        <h3>${this.condicion ? "Nuevo" : "Usado"}</h3>
        <h3>${this.Kilometros} Km</h3>
        <button class="btn-editar btn-auto" data-id=${this.id}>Editar</button>
        <button class="btn-eliminar btn-auto" data-id=${this.id}>Eliminar</button>
      </div>
    `;
  }
  // mostrarEnLista() {
  //   // return /*html*/
  //   return /*html*/ `

  //   <tr id=${this.id} class="item-auto">
  //     <td class=${this.marca}></td>
  //     <td data-id=${this.id} id="nombre" class="tabla-contenido">${this.modelo}</td>
  //     <td class="tabla-contenido">${this.año}</td>
  //     <td class="tabla-contenido">${this.precio}</td>
  //     <td class="tabla-contenido">${this.usado ? "Nuevo" : "Usado"}</td>
  //     <td class="tabla-contenido">${this.Kilometros}</td>
  //     <td class="icon_auto_container">
  //       <button class="btn-eliminar-auto" data-id=${this.id}>eliminar</button>
  //       <i class="fa-solid fa-pen-to-square icon-edit-auto" style="font-size: 1em" data-id=${
  //         this.id
  //       } id="btn-editar"></i>
  //     </td>
  //   </tr>

  //   `;
  // }

  mostrarDetalle() {
    return /*html*/ `
      <div class='headerDetalle-container' id=${this.id}>
        <p>Kilometros: ${this.kilometros}</p>
        <div>
          <h2>${this.modelo}</h2>
          <h3>${this.marca}</h3>
        </div>
      </div>
    `;
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
