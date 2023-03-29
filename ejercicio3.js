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

