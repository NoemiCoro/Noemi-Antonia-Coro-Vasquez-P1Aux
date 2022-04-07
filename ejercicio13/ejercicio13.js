const fechaCalcular = document.getElementById("fechaCalcular");
const anios = document.getElementById("anios");

const calcularAnios = (fechaCalcular) => {
    const fechaActual = new Date();
    const anioActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    const anioCalcular = parseInt(String(fechaCalcular).substring(0, 4));
    const mesCalcular = parseInt(String(fechaCalcular).substring(5, 7));
    const diaCalcular = parseInt(String(fechaCalcular).substring(8, 10));

    let anios = anioActual - anioCalcular;
    if(mesActual < mesCalcular) {
        anios--;
    } else if (mesActual === mesCalcular){
        if (diaActual < diaCalcular){
            anios--;
        }
    }
    return anios;

};

window.addEventListener('load', function(){
    fechaCalcular.addEventListener('change', function(){
        if (this.value){
            anios.innerText = `Los años que pasaron hasta el dia hoy: ${calcularAnios(this.value)} años`;

        }
    });
});