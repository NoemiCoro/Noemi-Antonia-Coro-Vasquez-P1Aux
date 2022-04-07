//ejercicio 4

var i = 0;
    var num;
    var num_uno = 0;
    var num_dos = 0;
    var num_tres = 0;
    do {
        num = Math.floor((Math.random() * 99) + 1);
        if ((num != num_uno) && (num != num_dos) && (num != 3)) {
            document.write(num + "<br>");
            i++;
            if (i == 1) {
                num_uno = num;
            }
            if (i == 2) {
                num_dos = num;
            }
            if (i == 3) {
                num_tres = num;
            }
        }
    } while (i < 3);