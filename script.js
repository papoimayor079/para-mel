function aceptar() {
  document.getElementById("musicBox").classList.remove("hidden");
  crearFlores();
}

function playSong(song) {
  const audio = document.getElementById("audio");

  // 🔴 CAMBIA ESTOS LINKS por tus canciones reales
  if (song === "cancion1") {
    audio.src = "cancion1.mp3";
  } else {
    audio.src = "cancion2.mp3";
  }

  audio.play();
  crearFlores();
}

// 🌹 flores cayendo
function crearFlores() {
  const flowers = document.getElementById("flowers");

  for (let i = 0; i < 30; i++) {
    let f = document.createElement("div");
    f.classList.add("flower");
    f.innerHTML = "🌹";

    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = (3 + Math.random() * 5) + "s";

    flowers.appendChild(f);
  }
}
