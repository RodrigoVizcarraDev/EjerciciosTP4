const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function (saldoIngresado) {
        this.saldo += saldoIngresado;
    },
    extraer: function (saldoExtraido) {
        if (this.saldo <= 0) {
            document.write(`Su saldo ${this.saldo} es insuficiente`);
        } else {
            if (this.saldo < saldoExtraido) {
                document.write(`Su saldo ${this.saldo} es menor a la cantidad que intenta extraer`);
            } else {
                this.saldo -= saldoExtraido;
            }
        }
    },
    mostrarSaldo: function () {
        console.log(`Su saldo actual es ${this.saldo}`);
    }

}

do {

    console.log(`
 --------------------------------------------------- \n
 Presione 1 para ingresar saldo
 Presione 2 para extraer saldo
 Presione 3 para mostrar el estado de su cuenta
 Presione 4 para salir                               \n
 --------------------------------------------------- 
 `);
    const opcionUsuario = +prompt("Ingrese su opcion");

    switch (opcionUsuario) {
        case 1:
            let saldo_a_ingresar = +prompt("Cuanto saldo ingresa?");
            cuenta.ingresar(saldo_a_ingresar);
            break;
        case 2:
            let saldo_a_extraer = +prompt("Cuanto saldo extrae?");
            cuenta.extraer(saldo_a_extraer);
            break;
        case 3:
            cuenta.mostrarSaldo();
            break;
        default:
            console.log("Saliendo del sistema");
            break;
    }


} while (true)
