const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const spanMascotaJugador = document.getElementById("mascotaJugador");
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
const mensajes = document.getElementById("mensajes");

const spanVidasJugador = document.getElementById("vidasJugador");
const spanVidasEnemigo = document.getElementById("vidasEnemigo");


const botonFuego = document.getElementById("botonFuego");
const botonAgua = document.getElementById("botonAgua");
const botonTierra = document.getElementById("botonTierra");

const notSelectPet = document.getElementById("notSelectPet");


let ataqueJugador = "";
let ataqueEnemigo = "";
let vidasTotalJugador = 3
let vidasTotalEnemigo = 3

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function crearMensaje(msg) {
  const p = document.createElement("p");

  p.innerHTML = `
    Tu mascota atacó con <strong>${ataqueJugador}</strong>, 
    la mascota del enemigo atacó con <strong>${ataqueEnemigo}</strong> - <strong>${msg}</strong> 
  `;

  mensajes.appendChild(p)
}

function combareResultado() {
  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje("Empate")
  } else if (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") {
    vidasTotalEnemigo -= 1
    crearMensaje("Ganaste")
    spanVidasJugador.innerHTML = vidasTotalJugador
    spanVidasEnemigo.innerHTML = vidasTotalEnemigo
  } else if (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") {
    vidasTotalEnemigo -= 1
    crearMensaje("Ganaste")
    spanVidasJugador.innerHTML = vidasTotalJugador
    spanVidasEnemigo.innerHTML = vidasTotalEnemigo
  } else if (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") {
    vidasTotalEnemigo -= 1
    crearMensaje("Ganaste")
    spanVidasJugador.innerHTML = vidasTotalJugador
    spanVidasEnemigo.innerHTML = vidasTotalEnemigo
  } else {
    vidasTotalJugador -= 1
    crearMensaje("Perdiste")
    spanVidasJugador.innerHTML = vidasTotalJugador
    spanVidasEnemigo.innerHTML = vidasTotalEnemigo
  }


  console.log({ vidasTotalJugador, vidasTotalEnemigo })

  if (vidasTotalJugador === 0 || vidasTotalEnemigo === 0) {
    botonFuego.style = "pointer-events: none; opacity: 0.7;"
    botonAgua.style = "pointer-events: none; opacity: 0.7;"
    botonTierra.style = "pointer-events: none; opacity: 0.7;"
  }
}

function selectAtaqueEnemigo() {
  const ataqueAleatorioEnemigo = aleatorio(1, 3);

  if (ataqueAleatorioEnemigo === 1) {
    ataqueEnemigo = "Fuego";
  } else if (ataqueAleatorioEnemigo === 2) {
    ataqueEnemigo = "Agua";
  } else {
    ataqueEnemigo = "Tierra";
  }

  if (
    inputHipodoge.checked ||
    inputCapipepo.checked ||
    inputRatigueya.checked
  ) {
    combareResultado()
    notSelectPet.innerHTML = ""
  } else {
    notSelectPet.innerHTML = "SELECCIONA A UNA MASCOTA"
  }
}

function ataqueJugadorFuego() {
  ataqueJugador = "Fuego";
  selectAtaqueEnemigo();
}

function ataqueJugadorAgua() {
  ataqueJugador = "Agua";
  selectAtaqueEnemigo();
}

function ataqueJugadorTierra() {
  ataqueJugador = "Tierra";
  selectAtaqueEnemigo();
}

function seleccionarMascotaEnemigo() {
  const mascotaEnemigo = aleatorio(1, 3);

  if (mascotaEnemigo === 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaEnemigo === 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function seleccionarMascotaJugador() {
  // hipodoge.checked
  //   ? console.log("Seleccionaste a hipodoge")
  //   : capipepo.checked
  //   ? console.log("Seleccionaste a capipepo")
  //   : ratigueya.checked
  //   ? console.log("Seleccionaste a ratigueya")
  //   : alert("Seleccionaste una mascota")

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  }

  seleccionarMascotaEnemigo();
}

function reiniciarJuego() {
  location.reload() 
}
