// Número correcto que el usuario debe adivinar
const numeroCorrecto = 42; 
// Función para leer un número del usuario
function leerNumero() {
    let numeroUsuario;
    do {
        numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));
    } while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100);
    return numeroUsuario;
}

// Función para comprobar el valor
function comprobarValor(numeroUsuario, numeroCorrecto) {
    if (numeroUsuario === numeroCorrecto) {
        return 0; // Son iguales
    } else if (numeroUsuario > numeroCorrecto) {
        return 1; // numeroUsuario es mayor
    } else {
        return -1; // numeroUsuario es menor
    }
}

// Función principal del juego
function jugar() {
    let resultado;
    do {
        const numeroUsuario = leerNumero();
        resultado = comprobarValor(numeroUsuario, numeroCorrecto);

        if (resultado === 0) {
            alert("¡Felicidades! Adivinaste el número.");
        } else if (resultado === -1) {
            alert("El número es menor. Intenta de nuevo.");
        } else {
            alert("El número es mayor. Intenta de nuevo.");
        }
    } while (resultado !== 0);
}

// Iniciar el juego
jugar();
