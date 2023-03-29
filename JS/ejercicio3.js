// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo{

    // constructor
    constructor(alto, ancho){
        this._alto = alto;
        this._ancho = ancho;
    }

    // getters
    get alto(){
        return this._alto;
    }
    get ancho(){
        return this._ancho;
    }
    // setters
    set alto(setAlto){
        this._alto = setAlto;
    }
    set ancho(setAncho){
        this._ancho = setAncho;
    }

    // P = ancho*2 + alto*2
    calcularPerimetro(){
        return (this._alto*2) + (this._ancho*2);
    }

    // A = ancho * alto
    calcularArea(){
        return this._ancho * this._alto;
    }
}


let salidaEntrada = null;
let opcionUsuario = null;
do{
    let ancho = +prompt("Digame el ancho del rectangulo");
    let alto = +prompt("Digame el alto del rectangulo");

    let objetoRectangulo = new Rectangulo(ancho, alto);
    opcionUsuario = +prompt("Presione 1 para calcular Perimetro | 2 para calcular Area");
    
    if(opcionUsuario === 1){
        let perimetroRectangulo = objetoRectangulo.calcularPerimetro();
        document.write(`<p>El perimetro de su rectangulo es: ${perimetroRectangulo}</p>`);
        continue;
    }else if(opcionUsuario === 2){
        let areaRectangulo = objetoRectangulo.calcularArea();
        continue;
    }


    salidaEntrada = confirm("Cancelar para salir | Aceptar para volver a ejecutar");
}while(salidaEntrada)