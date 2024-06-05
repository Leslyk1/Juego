// Todo el código dentro de esta función se ejecutará cuando el documento HTML esté completamente cargado 
document.addEventListener("DOMContentLoaded", function() {

    // Se seleccionan varios elementos del DOM que se usaran para mostrar y actualizar el puntaje, las elecciones, mensaje y botones.
    const puntosUsuarioSpan = document.getElementById("puntos-usuario");
    const puntosComputadoraSpan = document.getElementById("puntos-computadora");
    const eleccionUsuarioSpan = document.getElementById("eleccion-usuario");
    const eleccionComputadoraSpan = document.getElementById("eleccion-computadora");
    const mensajeDiv = document.getElementById("mensaje");
    const ganaPuntoP = document.getElementById("gana-punto");
    const reiniciarBtn = document.getElementById("reiniciar");
    const botonesArmas = document.querySelectorAll(".arma");

    
// Variables para mantener el puntaje de usuario y la computadora 
    let puntosUsuario = 0;
    let puntosComputadora = 0;


// Contienen todas las opciones posibles del juego
// contiene las reglas que define que opciones ganas contras cuales
    const opciones = ["piedra🪨", "papel📋", "tijera✂️", "fuego🔥", "agua💧", "esponja🧽", "aire💨"];
    const reglas = {
        "piedra🪨": ["tijera✂️", "esponja🧽", "fuego🔥"],
        "papel📋": ["piedra🪨", "agua💧", "aire💨"],
        "tijera✂️": ["papel📋", "esponja🧽", "aire💨"],
        "fuego🔥": ["tijera✂️", "papel📋", "esponja🧽"],
        "agua💧": ["fuego🔥", "piedra🪨", "tijera✂️"],
        "esponja🧽": ["agua💧", "papel📋", "aire💨"],
        "aire💨": ["fuego🔥", "agua💧", "piedra🪨"]
    };

    // Manejo y funcionamiento  del click en los botones
    botonesArmas.forEach(boton => {
        boton.addEventListener("click", () => {
            if (puntosUsuario >= 5 || puntosComputadora >= 5) {
                return;
            }
            const eleccionUsuario = boton.id;
            const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

            eleccionUsuarioSpan.textContent = eleccionUsuario;
            eleccionComputadoraSpan.textContent = eleccionComputadora;

            if (eleccionUsuario === eleccionComputadora) {
                ganaPuntoP.textContent = "¡Es un empate!";
            } else if (reglas[eleccionUsuario].includes(eleccionComputadora)) {
                puntosUsuario++;
                puntosUsuarioSpan.textContent = puntosUsuario;
                ganaPuntoP.textContent = "¡Ganaste un punto! 🔥";
            } else {
                puntosComputadora++;
                puntosComputadoraSpan.textContent = puntosComputadora;
                ganaPuntoP.textContent = "¡La computadora gana un punto! 😢";
            }

            mensajeDiv.classList.remove("disabled");

            if (puntosUsuario >= 5 || puntosComputadora >= 5) {
                ganaPuntoP.textContent += puntosUsuario >= 5 ? " ¡Ganaste el juego! 🎉" : " La computadora ganó el juego. 😭";
                reiniciarBtn.classList.remove("disabled");
            }
        });
    });


    // se utiliza un eventlistener al boton para reiniciar que restablesca los puntajes y oculte el mesaje.
    reiniciarBtn.addEventListener("click", () => {
        puntosUsuario = 0;
        puntosComputadora = 0;
        puntosUsuarioSpan.textContent = puntosUsuario;
        puntosComputadoraSpan.textContent = puntosComputadora;
        mensajeDiv.classList.add("disabled");
        reiniciarBtn.classList.add("disabled");
    });
});
