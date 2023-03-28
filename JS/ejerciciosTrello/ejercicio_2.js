// Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método.
let calculadora = {
    sumar:(numero_1, numero_2) => numero_1 + numero_2,
    restar:(numero_1, numero_2) => numero_1 - numero_2,
    dividir:function(numero_1, numero_2){
        if(numero_1 === 0){
            console.log("No se puede dividir en cero");
        }else{
            return numero_1 / numero_2;
        }
    },
    multiplicar:(numero_1, numero_2) => numero_1 * numero_2,
}

document.write(`Suma <h1>${calculadora.sumar(10, 10)}</h1>`);
document.write(`Suma <h1>${calculadora.sumar(30, 10)}</h1>`);

document.write(`Suma <h1>${calculadora.restar(30, 20)}</h1>`);
document.write(`Suma <h1>${calculadora.restar(100, 50)}</h1>`);

document.write(`Suma <h1>${calculadora.multiplicar(7, 8)}</h1>`);
document.write(`Suma <h1>${calculadora.multiplicar(2, 9)}</h1>`);

document.write(`Suma <h1>${calculadora.dividir(20, 5)}</h1>`);
document.write(`Suma <h1>${calculadora.dividir(35, 7)}</h1>`);
