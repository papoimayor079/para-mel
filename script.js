const audioYes = new Audio('cancion1.mp3');
const audioNo = new Audio('cancion2.mp3');

function accept() {
    // Detener cualquier sonido previo
    audioNo.pause();
    audioNo.currentTime = 0;

    // Reproducir música de éxito
    audioYes.play();

    // Cambiar texto
    document.getElementById('main-text').innerText = "¡Sabía que dirías que sí! 💕";

    // Ocultar botones
    document.getElementById('button-container').style.display = 'none';

    // Activar lluvia de pétalos
    setInterval(createPetal, 300);
}

// Hacer que el botón "No" se mueva si intentan presionarlo
function moveNo() {
    const btnNo = document.getElementById('btn-no');
    btnNo.style.position = 'absolute';
    btnNo.style.top = Math.random() * 80 + 'vh';
    btnNo.style.left = Math.random() * 80 + 'vw';
}

function createPetal() {
    const petal = document.createElement('div');
    petal.innerText = '🌹';
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('petal-container').appendChild(petal);

    // Eliminar pétalo tras caer
    setTimeout(() => {
        petal.remove();
    }, 5000);
}
