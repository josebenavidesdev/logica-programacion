/**
 * Imprimir números mediante un rango de 2 números, si el primer número es mayor
 * al segundo debera ordenarse para poder imprimir de una forma ascendente
 */

const chalk = require("chalk")
const input = require("prompt-sync")();

const minMax = (num1, num2) =>
  (num1 > num2) ? {max: num1, min: num2} : {max: num2, min: num1};

const firstNumber = parseInt(input("Ingrese el primer número: "));
const secondNumber = parseInt(input("Ingrese el segundo número: "));
const numbers = minMax(firstNumber, secondNumber);

for (let i = numbers.min; i <= numbers.max; i++)
  console.log(chalk.green(i));
