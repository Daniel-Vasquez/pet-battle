const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const mensajes = document.getElementById("mensajes");

const containerseleccionarMascota = document.getElementById("seleccionarMascota");
const containerSeleccionarAtaque = document.getElementById("seleccionarAtaque");

const petChosenPlayer = document.getElementById("petChosenPlayer");
const namePetPlayer = document.getElementById("namePetPlayer");

const petChosenEnemy = document.getElementById("petChosenEnemy");
const namePetEnemy = document.getElementById("namePetEnemy");

const spanVidasJugador = document.getElementById("vidasJugador");
const spanVidasEnemigo = document.getElementById("vidasEnemigo");

const botonFuego = document.getElementById("botonFuego");
const botonAgua = document.getElementById("botonAgua");
const botonTierra = document.getElementById("botonTierra");

const botonReiniciar = document.getElementById("botonReiniciar");

let ataqueJugador = "";
let ataqueEnemigo = "";
let vidasTotalJugador = 3
let vidasTotalEnemigo = 3


const imgEnemigo = [
  "fox.png",
  "lion.png",
  "owl.png"
]

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function useScrollToTop() {
  window.scrollTo(0, 0);
}


function crearMensaje(msg) {
  const p = document.createElement("p");
  const text = document.createElement("span")

  p.innerHTML = `
    Tu mascota atacó con <strong>${ataqueJugador}</strong>, 
    la mascota del enemigo atacó con <strong>${ataqueEnemigo}</strong>.
    <p><strong>${msg}</strong></p>
  `;

  p.classList = "resultsBattle-text"

  text.innerHTML = "Elige otro ataque."
  text.className = "resultsBattle-span"

  mensajes.append(p, text)
}

function msgFinally() {
  const imgs = document.getElementsByClassName("petChosenEnemy-img")

  const imgUsuario = imgs[0]
  const imgEnemy = imgs[1]

  if (vidasTotalJugador === 0) {
    imgUsuario.style.transform = "rotate(90deg)"
    mensajes.innerHTML = `<h2>Perdiste el juego.</h2>`
    botonReiniciar.style.display = "inline"
  } else if (vidasTotalEnemigo === 0) {
    imgEnemy.style.transform = "rotate(90deg)"
    mensajes.innerHTML = `<h2>Ganaste el juego.</h2>`
    botonReiniciar.style.display = "inline"
  }
}

function combareResultado() {
  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje("Empate")
  } else if (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") {
    vidasTotalEnemigo -= 1
    crearMensaje("Ganaste")
    spanVidasEnemigo.innerHTML = vidasTotalEnemigo
  } else if (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") {
    vidasTotalEnemigo -= 1
    crearMensaje("Ganaste")
    spanVidasEnemigo.innerHTML = vidasTotalEnemigo
  } else if (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") {
    vidasTotalEnemigo -= 1
    crearMensaje("Ganaste")
    spanVidasEnemigo.innerHTML = vidasTotalEnemigo
  } else {
    vidasTotalJugador -= 1
    crearMensaje("Perdiste")
    spanVidasJugador.innerHTML = vidasTotalJugador
  }

  if (vidasTotalJugador === 0 || vidasTotalEnemigo === 0) {
    botonFuego.style = "pointer-events: none; opacity: 0.7;"
    botonAgua.style = "pointer-events: none; opacity: 0.7;"
    botonTierra.style = "pointer-events: none; opacity: 0.7;"
  }

  msgFinally()
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

  combareResultado()
}

function ataqueJugadorFuego() {
  ataqueJugador = "Fuego";
  mensajes.innerHTML = ""
  selectAtaqueEnemigo();
}

function ataqueJugadorAgua() {
  ataqueJugador = "Agua";
  mensajes.innerHTML = ""
  selectAtaqueEnemigo();
}

function ataqueJugadorTierra() {
  ataqueJugador = "Tierra";
  mensajes.innerHTML = ""
  selectAtaqueEnemigo();
}

function printImgPlayers(id, msg, container) {
  const img = document.createElement('img');
  const text = document.createElement("p")
  
  text.innerHTML = msg

  img.src = `${imgEnemigo[id]}`
  img.className = "petChosenEnemy-img"

  container.append(text, img)
}

function seleccionarMascotaEnemigo() {
  const mascotaEnemigo = aleatorio(1, 3);

  if (mascotaEnemigo === 1) {
    namePetEnemy.innerHTML = "Hipodoge";
    printImgPlayers(0, `Mascota del <strong>enemigo</strong>:`, petChosenEnemy)
  } else if (mascotaEnemigo === 2) {
    namePetEnemy.innerHTML = "Capipepo";
    printImgPlayers(1, `Mascota del <strong>enemigo</strong>:`, petChosenEnemy)
  } else {
    namePetEnemy.innerHTML = "Ratigueya";
    printImgPlayers(2, `Mascota del <strong>enemigo</strong>:`, petChosenEnemy)
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
    namePetPlayer.innerHTML = "Hipodoge";
    printImgPlayers(0, "Tu mascota:", petChosenPlayer)
  } else if (inputCapipepo.checked) {
    namePetPlayer.innerHTML = "Capipepo";
    printImgPlayers(1, "Tu mascota:", petChosenPlayer)
  } else if (inputRatigueya.checked) {
    namePetPlayer.innerHTML = "Ratigueya";
    printImgPlayers(2, "Tu mascota:", petChosenPlayer)
  }

  petChosenEnemy.innerHTML = ""
  containerseleccionarMascota.classList.add("fadeOutUpBig")
  containerseleccionarMascota.style.height = "0px"
  containerSeleccionarAtaque.style.display = "inline-block"
  seleccionarMascotaEnemigo();
}

function reiniciarJuego() {
  containerSeleccionarAtaque.innerHTML = ""
  useScrollToTop()
  location.reload() 
}
