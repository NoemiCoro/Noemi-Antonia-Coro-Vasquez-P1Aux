//ejercicio 10

function masIva(precio, iva){
    iva = iva || 21
    var coniva = (precio + precio*iva/100);
    return coniva;
  }
  var precio = Number(prompt("Introduce un precio"));
  var iva = Number(prompt("Introduce el iva"));
  if(iva > 0){
    var resultado = masIva(precio, iva);
    console.log(resultado);
  }
  else{
    var resultado = masIva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("<br>Precio más Iva: " + resultado);