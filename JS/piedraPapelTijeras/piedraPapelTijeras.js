let jugamosOtraVez = true;

const loQueSale = function () {
    let opciones = ["piedra", "papel", "tijera"];
    let aleatorio = Math.floor(Math.random() * opciones.length);

    return opciones[aleatorio];
}

do {
    let eleccionUsuario = +prompt("1:piedra, 2:papel, 3:tijera");
    switch (eleccionUsuario) {
        case 1:
            eleccionUsuario = "piedra";
            break;
        case 2:
            eleccionUsuario = "papel";
            break;
        case 3:
            eleccionUsuario = "tijera";
            break;
        default:
            alert("Escriba un numero por favor");
            continue;
    }

    if (eleccionUsuario === "piedra") {
        if (loQueSale() === "papel") {
            alert("MAQUINA PAPEL Y TU PIEDRA | PIERDES");
        } else if (loQueSale() === "tijera") {
            alert("MAQUINA TIJERA Y TU PIEDRA | GANAS");
        } else {
            alert("MAQUINA PIEDRA Y TU PIEDRA | EMPATE");
        }
    } else if (eleccionUsuario === "papel") {
        if (loQueSale() === "tijera") {
            alert("MAQUINA TIJERA Y TU PAPEL | PIERDES");
        } else if (loQueSale() === "piedra") {
            alert("MAQUINA PIEDRA Y TU PAPEL | GANAS");
        } else {
            alert("MAQUINA PAPEL Y TU PAPEL | EMPATE");
        }
    } else {
        if (loQueSale() === "piedra") {
            alert("MAQUINA PIEDRA Y TU TIJERAS | PIERDES");
        } else if (loQueSale() === "papel") {
            alert("MAQUINA PAPEL Y TU TIJERAS | GANAS");
        } else {
            alert("MAQUINA TIJERAS Y TU TIJERAS | EMPATE");
        }
    }

    jugamosOtraVez = confirm("Cancelar si quiere salir | Aceptar si quiere jugar de nuevo");

} while (jugamosOtraVez);
alert("Fin del juego");