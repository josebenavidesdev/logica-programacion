/**
 * Elabore un algoritmo para calcular e imprimir el area de un triangulo
 */

const chalk = require("chalk")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const calcularArea = (base, altura) => (base * altura) / 2

const pregunta = pregunta => {
  return new Promise((resolver, rechazar) => {
    rl.question(pregunta, numero => {
      const validarNumero = !isNaN(parseFloat(numero))

      if (validarNumero) resolver(Number(numero))

      rechazar("Ingrese un número!")
    })
  })
}

const principal = async () => {
  console.log(chalk.bgBlack.white("Calcular el area de un Triangulo"))

  try {
    const base = await pregunta(chalk.yellow("Ingrese la base: "))
    const altura = await pregunta(chalk.yellow("Ingrese la altura: "))

    const resultado = calcularArea(base, altura)
    console.log(chalk.green("El area del triangulo es:", resultado))
  } catch (err) {
    console.log(chalk.red(err))
  }

  rl.close()
}

principal()
