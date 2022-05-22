/**
 * Imprimir y contar los múltiplos de 3 desde la unidad hasta un numero que
 * introducimos por teclado.
 */

const chalk = require("chalk");
const input = require("prompt-sync")();

const number = parseInt(input(chalk.blue("Ingrese un número: ")));
let count = 0;

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i);
    count++;
  }
}

console.log(chalk.green("Multiplos de 3:"), count);
