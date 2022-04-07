//ejercicio 1


var edad = prompt("Introduce tu edad");
if (Number(edad) == edad) {
	if (edad => 18) {
		document.write("Puedes conducir");
        console.log(edad);
	}
    else {
        document.write("No Puedes conducir");
        console.log(edad);
    }
}

else {
	
	alert("Introduce un numero válido");
    console.log("aqui entra");
};