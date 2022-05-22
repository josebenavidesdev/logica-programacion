/**
 * Elabore un algoritmo para sumar los 'n' primeros números naturales,
 * excluyendo el cero
 */

const chalk = require("chalk");
const input = require("prompt-sync")();

const sumOfNaturalNumbers = number => {
  if (isNaN(number)) return chalk.red("Ingrese un número!");

  if (number <= 0) return chalk.magenta("Ingrese un número mayor que cero");

  return number * (number + 1) / 2;
}

const number = parseInt(input("Ingrese un número: "));

console.log(sumOfNaturalNumbers(number));
