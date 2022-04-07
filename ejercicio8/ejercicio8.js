// Ejercicio 8

var numero = Number(prompt("Introduce un número entre 1 y 100"));
if((numero >= 1) && (numero <= 100)) {
    var x = 0;
    var y = 1;
    var z;
    document.write(x + "<br>");
    for (i = 0; i < (numero-1); i++) {
        z = x + y;
        document.write(z + "<br>");
        y = x;
        x = z;
    }
    console.log(numero);
}
else {
    alert("Número erróneo");
}