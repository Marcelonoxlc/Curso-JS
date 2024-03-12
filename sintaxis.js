// Declaración de variables
let nombre = "Juan";
const edad = 25;
var saldo = 1000;

// Uso de condicionales
if (edad >= 18) {
    console.log(nombre + " es mayor de edad.");
} else {
    console.log(nombre + " es menor de edad.");
}

// Ciclo for
console.log("Imprimiendo números del 1 al 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Ciclo while
console.log("Imprimiendo números del 5 al 1:");
let j = 5;
while (j >= 1) {
    console.log(j);
    j--;
}

// Arrays
let numeros = [1, 2, 3, 4, 5];
console.log("Elementos del array 'numeros':", numeros);

// Accediendo a elementos del array
console.log("Primer elemento:", numeros[0]);
console.log("Segundo elemento:", numeros[1]);

// Agregar elementos al array
numeros.push(6);
console.log("Array 'numeros' después de agregar un elemento:", numeros);

// Eliminar el último elemento del array
let ultimoElemento = numeros.pop();
console.log("Array 'numeros' después de eliminar el último elemento:", numeros);
console.log("Último elemento eliminado:", ultimoElemento);
