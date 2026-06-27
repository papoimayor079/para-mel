// TEXTO DINÁMICO
function cambiarTexto() {
  const frases = [
    "Eres alguien muy especial 💖",
    "Me alegra haberte conocido 💫",
    "Tu sonrisa vale mucho 🌸",
    "Esto es solo para ti 💌"
  ];

  const random = Math.floor(Math.random() * frases.length);
  document.getElementById("texto").innerText = frases[random];
}

// MOSTRAR CARTA
function mostrarCarta() {
  document.getElementById("carta").classList.toggle("oculto");
}

// CORAZONES ANIMADOS
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);
