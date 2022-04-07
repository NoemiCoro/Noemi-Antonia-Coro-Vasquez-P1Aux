//Ejercicio 3

var nombre1 = prompt("Nombre 1:");
var edad1 = Number(prompt("Edad 1:"));
console.log(nombre1);
console.log(edad1);

var nombre2 = prompt("Nombre 2:");
var edad2 = Number(prompt("Edad 2:"));
console.log(nombre2);
console.log(edad2);

var nombre3 = prompt("Nombre 3:");
var edad3 = Number(prompt("Edad 3:"));
console.log(nombre3);
console.log(edad3);

var maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}