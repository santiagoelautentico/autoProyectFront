export default class Auto {
  id;
  marca;
  modelo;
  condicion;
  año;
  color;
  precio;
  imagen;
  imagen2;
  imagen3;
  imagen4;
  imagen5;
  planDePago;
  motor;
  puertas;
  Kilometros;
  numeroDePlazas;
  PapelesAlDia;
  tipoDeCaja;
  combustible;
  acercaDelAuto;

  constructor(
    id = 0,
    marca = "",
    modelo = "",
    condicion = false,
    año = 0,
    color = "",
    precio = 0,
    imagen = "",
    imagen2 = "",
    imagen3 = "",
    imagen4 = "",
    imagen5 = "",
    planDePago = "",
    motor = "",
    puertas = 0,
    Kilometros = 0,
    numeroDePlazas = 0,
    PapelesAlDia = false,
    tipoDeCaja = "",
    combustible = "",
    acercaDelAuto = ""
  ) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.condicion = condicion;
    this.color = color;
    this.año = año;
    this.precio = precio;
    this.imagen = imagen;
    this.imagen2 = imagen2;
    this.imagen3 = imagen3;
    this.imagen4 = imagen4;
    this.imagen5 = imagen5;
    this.planDePago = planDePago;
    this.motor = motor;
    this.puertas = puertas;
    this.Kilometros = Kilometros;
    this.numeroDePlazas = numeroDePlazas;
    this.PapelesAlDia = PapelesAlDia;
    this.tipoDeCaja = tipoDeCaja;
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
        <h3>${this.condicion ? "Usado" : "Nuevo"}</h3>
        <h3>${this.Kilometros} Km</h3>
        <button class="btn-editar btn-callAction btn-auto" data-id=${
          this.id
        }>Editar</button>
        <button class="btn-eliminar btn-auto" data-id=${
          this.id
        }>Eliminar</button>
      </div>
    `;
  }
  mostrarDetalle() {
    return /*html*/ `
    <div class="header-regresar">
      <a href="home.html"><img src="./img/back-arrow.png" class="atras" alt=""></a>
    </div>
    <div class="galeriaFotos-container">
      <img
        src=${this.imagen}
        class="fotoPrincipal foto"
        alt=${this.modelo}
      />
      <div class="galeriaFotos">
        <img
          src=${this.imagen2}
          class="galeriaFoto foto"
          alt=""
        />
        <img
          src=${this.imagen3}
          class="galeriaFoto foto"
          alt=""
        />
        <img
          src=${this.imagen4}
          class="galeriaFoto foto"
          alt=""
        />
        <img
          src=${this.imagen5}
          class="galeriaFoto foto"
          alt=""
        />
      </div>
    </div>
    <div class="principal-container">
      <div class="principal-left">
        <div class="${this.marca} iconPMarca"></div>
        <div class="nombre-container">
          <h2 class="tituloDetalle">${this.marca} ${this.modelo}</h2>
          <div class="nombre-abajo">
            <div class="kilometros-container items-titulo">
              <img src="./img/speed.png" class="icon" alt="" />
              <span>${this.Kilometros} km</span>
            </div>
            <div class="año-container items-titulo">
              <img
                src="./img/calendar.png"
                class="icon iconCalendar"
                alt=""
              />
              <span>Año de lanzamiento: ${this.año}</span>
            </div>
            <span>Condicion: ${this.condicion ? "Usado" : "Nuevo"}</span>
            <div class="condicion-container"></div>
          </div>
        </div>
      </div>
      <div class="precio-container">
        <div class="contadoPrecio">
          <span>Al contado</span>
          <h3 class="precio">U$D ${this.precio}</h3>
        </div>
        <div class="cuotasprecio">
          <span>En cuotas hasta 60</span>
          <h3 class="precio">U$D ${(this.precio * 0.22) + this.precio }</h3>
        </div>
      </div>
    </div>
    <hr />
    <h3 class="title-masDetalles">Más Detalles</h3>
    <div class="masDetalles-container">
      <div class="izq-container">
        <div class="caja-container">
          <p class="titulo-caja">Color</p>
          <h3 class="texto-caja">${this.color}</h3>
        </div>

        <div class="caja-container">
          <p class="titulo-caja">motor</p>
          <h3 class="texto-caja">${this.motor}</h3>
        </div>
        <div class="caja-container">
          <p class="titulo-caja">puertas</p>
          <h3 class="texto-caja">${this.puertas}</h3>
        </div>
        <div class="caja-container">
          <p class="titulo-caja">Papeles al dia</p>
          <h3 class="texto-caja">${this.condicion ? "No" : "Si"}</h3>
        </div>
        <div class="caja-container">
          <p class="titulo-caja">Tipo de caja</p>
          <h3 class="texto-caja">${this.tipoDeCaja}</h3>
        </div>
        <div class="caja-container">
          <p class="titulo-caja">Combustible</p>
          <h3 class="texto-caja">${this.combustible}</h3>
        </div>
      </div>
      <div class="masInfo">
        <h3>Mas informacion</h3>
        <p>
          ${this.acercaDelAuto}
        </p>
        <div class="botones-detalle">
          <button class="btn-editar btn-callAction btn-detalle">
            Editar
          </button>
          <button class="btn-editar btn-eliminar btn-detalle">
            Eliminar
          </button>
        </div>
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
