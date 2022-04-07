//ejercicio 14

var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;    
    cadena = cadena.toUpperCase();  
    var car;
    var contador = 0;
    var cont = 0;
    var i;
    var j;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
            console.log(contador);
        }
        if ((car == "B") || (car == "C") || (car == "D") || (car == "F") || (car == "G") || (car == "H") || (car == "J") || (car == "K") || (car == "L") || (car == "M") || (car == "N") || (car == "P") || (car == "Q") || (car == "R") || (car == "S") || (car == "T") || (car == "V") || (car == "W") || (car == "X") || (car == "Y") || (car == "Z") )  {
            cont++;
            console.log(cont);
        }

    }
    document.write( cadena + "<br>");
    document.write(" Número de Vocales: " + contador + "<br>");
    document.write(" Número de Consonantes: " + cont );

    

