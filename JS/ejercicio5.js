/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
*/
const taxonomiaGeneraciones = [
    {
        nombreGeneracion: "GeneracionZ",
        marcoTemporal: [1994, 2010],
        poblacionDeLaGeneracion: 7800000,
        circunstanciaHistorica: "Expansion masiva de internet",
        rasgoCaracteristico: "Irreverencia"
    },
    {
        nombreGeneracion: "GeneracionY_milennials",
        marcoTemporal: [1981, 1993],
        poblacionDeLaGeneracion: 7200000,
        circunstanciaHistorica: "Inicio de la digitalizacion",
        rasgoCaracteristico: "Frustracion",
    },
    {
        nombreGeneracion: "GeneracionX",
        marcoTemporal: [1969, 1980],
        poblacionDeLaGeneracion: 9300000,
        circunstanciaHistorica: "Crisis del 73 y transicion española",
        rasgoCaracteristico: "Obsesion por el exito"
    },
    {
        nombreGeneracion: "Baby Boom",
        marcoTemporal: [1949, 1968],
        poblacionDeLaGeneracion: 12200000,
        circunstanciaHistorica: "Paz y explosion demografica",
        rasgoCaracteristico: "Ambicion"
    },
    {
        nombreGeneracion: "Silent Generation",
        marcoTemporal: [1930, 1948],
        poblacionDeLaGeneracion: 6300000,
        circunstanciaHistorica: "Confictor belicos",
        rasgoCaracteristico: "Austeridad"
    }
]
class Persona {
    //Propiedades privadas
    #nombre = "userName";
    #edad = 0;
    #dni = 00000000;
    #sexo = undefined;
    #peso = 0;
    #altura = 0;
    #anioNacimiento = 0;

    //Metodo constructor
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }

    //Metodos get y set
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        this.#edad = edad;
    }

    get dni() {
        return this.#dni;
    }

    set dni(dni) {
        this.#dni = dni;
    }

    get sexo() {
        return this.#sexo;
    }

    set sexo(sexo) {
        this.#sexo = sexo;
    }

    get peso() {
        return this.#peso;
    }

    set peso(peso) {
        this.#peso = peso;
    }

    get altura() {
        return this.#altura;
    }

    set altura(altura) {
        this.#altura = altura;
    }

    get anioNacimiento() {
        return this.#anioNacimiento;
    }

    set anioNacimiento(anioNacimiento) {
        this.#anioNacimiento = anioNacimiento;
    }

    mostrarInformacionPersona() {
        document.write(
            `<p>Nombre: ${this.#nombre}</p>
             <p>Edad: ${this.#edad}</p>
             <p>DNI: ${this.#dni}</p>
             <p>Sexo: ${this.#sexo}</p>
             <p>Peso: ${this.#peso}</p>
             <p>Altura: ${this.#altura}</p>
             <p>Año: ${this.#anioNacimiento}</p>`);
    }

    mostrarGeneracion() {
        let tabla = `<table>`;

        tabla += `<tr>`;

        tabla += `<th>`;
        tabla += `Nombre de la Generacion`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Marco temporal`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Poblacion de las generaciones`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Circunstancia historica`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Rasgo caracteristico`;
        tabla += `</th>`;

        tabla += `</tr>`;
        taxonomiaGeneraciones.forEach((elemento) => {
            // Generacion 
            if (this.#anioNacimiento >= elemento.marcoTemporal[0] && this.#anioNacimiento <= elemento.marcoTemporal[1]) {
                document.write(`<h1>Pertenece a la siguiente generacion</h1>`);
                tabla += `<tr>`;

                tabla += `<td>`;
                tabla += `${elemento.nombreGeneracion}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.marcoTemporal}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.poblacionDeLaGeneracion}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.circunstanciaHistorica}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.rasgoCaracteristico}`;
                tabla += `</td>`;
            }
        })
        document.write(tabla);
    }

    mostrarSiEsMayorDeEdad(){
        this.#edad >= 18 ? alert(`Usted es mayor de edad, tiene ${this.#edad} años`) : alert(`Usted es menor de edad, tiene ${this.#edad} años`);
    }
}

let nombreUsuario = prompt("Indique su nombre");
let edadUsuario = +prompt("Indique su edad");
let dniUsuario = +prompt("Indique su DNI sin puntos");
let sexoUsuario = prompt("Indique su sexo 'femenino' 'masculino'");
let pesoUsuario = +prompt("Indique su peso sin comas");
let alturaUsuario = parseFloat(prompt("Indique su altura usando un punto en vez de coma"));
let anioNacimientoUsuario = +prompt("Indique su año de nacimiento por favor");

let persona_1 = new Persona(
    nombreUsuario,
    edadUsuario,
    dniUsuario,
    sexoUsuario,
    pesoUsuario,
    alturaUsuario,
    anioNacimientoUsuario
);
let confirmacion = true;
do {
    const eleccionUsuario = +prompt(`
    1: Mostrar generacion a la cual pertenece
    2: Mostrar si es mayor de edad
    3: Mostrar sus datos
    4: Generar un DNI
    5: SALIR`);
    switch(eleccionUsuario){
        case 1:
            persona_1.mostrarGeneracion();
            break;
        case 2:
            persona_1.mostrarSiEsMayorDeEdad();
            break;
        case 3:
            persona_1.mostrarInformacionPersona();
            break;
        case 4:
            let dniAleatorio = Math.floor(Math.random() * 99999999) + 1;
            document.write(`El DNI generado aleatoriamente es: ${dniAleatorio}`);
            break;
        case 5:
            confirmacion = confirm("Aceptar para salir");
            break;
        default:
            alert("No es una opcion valida");
    }
}while(confirmacion)

