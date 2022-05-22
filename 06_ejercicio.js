/**
 * Calcular la nota definitiva de un alumno, tomando en cuenta las ponderaciones
 * siguientes:
 * 1ra practica: 30%
 * 2da practica: 30%
 * 3ra practica: 40%
 * 
 * El promedio mínimo para aprobar es de 14
 * 
 * las notas van del 0 - 20
 * 
 * NOTA: El promedio ponderado es una medida para obtener resultados de diversos
 * datos con diferentes pesos o grados de importancia.
 */

const chalk = require("chalk");
const input = require("prompt-sync")();

const weights = [30, 30, 40];
const practices = [];
let average = 0;

const result = average =>
  (average < 14) ? chalk.red("Desaprobaste :(") : chalk.green("Aprobaste :)");

for (let i = 1; i <= weights.length; i++) {
  let practice = parseInt(input(`Ingrese la calificación ${i}: `));
  practices.push(practice);
}

for (let i = 0; i < weights.length; i++) {
  average += practices[i] * weights[i] / 100;
}

console.log(chalk.blue("Promedio:"), average);
console.log(result(average));
