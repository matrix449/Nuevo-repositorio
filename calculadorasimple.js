const prompt = require("prompt-sync")();
let tipodecalculo = prompt("¿Qué operación desea realizar? (suma = 1, resta = 2, multiplicación = 3, división = 4)");
let valor1 = prompt("Ingrese el primer número:");
let valor2 = prompt("Ingrese el segundo número:");

if (tipodecalculo == "1") {
    let resultado = parseFloat(valor1) + parseFloat(valor2);
    console.log("El resultado de la suma es: " + resultado);
} else if (tipodecalculo == "2") {
    let resultado = parseFloat(valor1) - parseFloat(valor2);
    console.log("El resultado de la resta es: " + resultado);
} else if (tipodecalculo == "3") {
    let resultado = parseFloat(valor1) * parseFloat(valor2);
    console.log("El resultado de la multiplicación es: " + resultado);
} else if (tipodecalculo == "4") {
    let resultado = parseFloat(valor1) / parseFloat(valor2);
    console.log("El resultado de la división es: " + resultado);
}

