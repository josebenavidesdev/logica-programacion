/**
 * Imprima los n números pares 
 */

const chalk = require("chalk")
const input = require("prompt-sync")();

const validateNumber = number => isNaN(number) ? false : true;

const number = parseInt(input("Cantidad de 'n' numeros pares: "));

if (validateNumber(number)) {
  let accumulator = 2;

  for (let i = 0; i < number; i++) {
    console.log(accumulator);

    accumulator += 2;
  }
} else {
  console.log(chalk.red("Ingrese un número!"));
}
