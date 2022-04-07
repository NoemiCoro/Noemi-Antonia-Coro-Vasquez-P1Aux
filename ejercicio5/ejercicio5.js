//ejercicio 5

var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;    
    cadena = cadena.toUpperCase();  
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i); 
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");