
// Arreglo de palabras predefinidas
const palabras = ["manzana", "fiesta", "vaper", "hoodka", "paracaidas", "Saiko", "Medusa", "Luna" ];

// Seleccionar una palabra al azar
const palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

// Arreglo para almacenar las letras adivinadas
const letrasAdivinadas = new Array(palabraSeleccionada.length).fill("_");

// Número máximo de intentos
const maxIntentos = 6;
let intentosRestantes = maxIntentos;

// Función para mostrar el estado actual del juego
function mostrarEstado() {
    console.log(`Palabra: ${letrasAdivinadas.join(" ")}`);
    console.log(`Intentos restantes: ${intentosRestantes}`);
}

// Función para procesar la letra ingresada por el jugador
function procesarLetra(letra) {
    if (palabraSeleccionada.includes(letra)) {
        for (let i = 0; i < palabraSeleccionada.length; i++) {
            if (palabraSeleccionada[i] === letra) {
                letrasAdivinadas[i] = letra;
            }
        }
    } else {
        intentosRestantes--;
    }
}

// Función para verificar si el jugador ha ganado
function haGanado() {
    return letrasAdivinadas.join("") === palabraSeleccionada;
}

 // Juego principal
 console.log("¡Bienvenido al juego de Ahorcado!");
 mostrarEstado();

 // Agrega un evento para capturar la letra ingresada por el jugador
 document.addEventListener("keydown", (event) => {
     const letraIngresada = event.key.toLowerCase();
     procesarLetra(letraIngresada);
     mostrarEstado();

     if (haGanado()) {
         console.log("¡Felicidades! Has adivinado la palabra correctamente.");
     } else if (intentosRestantes === 0) {
         console.log(`¡Perdiste! La palabra era "${palabraSeleccionada}".`);
     }
 });
