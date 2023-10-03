/**
 * DWEC: Ejemplo 1. Encontrar los errores del script
 * @author Maria R. F.
 *
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array.
 * Posteriormente, los nombres se mostrarán en una única ventana emergente
 */

// Crear un array para almacenar los nombres
var nombres = [];

// Definir la constante para el número de nombres
var NUMERO_NOMBRES = 10;

// Usar una variable para almacenar los nombres como cadena
var CADENA_NOMBRES = "";

// Utilizar un bucle for para leer 10 nombres
for (var i = 0; i < NUMERO_NOMBRES; i++) {
  // Utilizar la variable i como índice para el array nombres
  nombres[i] = prompt("Introduce un nombre", "Agapito");
}

// Utilizar un bucle for para concatenar los nombres en una cadena
for (var i = 0; i < NUMERO_NOMBRES; i++) {
  CADENA_NOMBRES += nombres[i] + " ";
}

// Mostrar la cadena con los nombres en una ventana emergente
alert(CADENA_NOMBRES);
