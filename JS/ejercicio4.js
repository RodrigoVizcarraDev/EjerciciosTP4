// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    #codigo;

    // constructor de la clase Producto
    constructor(nombre, precio, codigo){
        this.#codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Metodos get y set para acceder a la propiedad privada #codigo codigo
    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo; 
    }

    // Metodo imprime datos
    imprimeDatos(){
        document.write(`<h2>${this.nombre}</h2>
                        <p>Precio de producto: ${this.precio}</p>
                        <p>Nombre de producto: ${this.nombre}</p>
                        <p>Codigo de producto: ${this.#codigo}</p>`);
    }
}

let lecheEntera = new Producto("Leche La Serenisima", 200, "AB309");
let cereales = new Producto("Cereal Nesquik", 500, "AB209");
let fideos = new Producto("Fideos Luchetti", 180, "AB109");

let arrayOfProducts = [lecheEntera,cereales,fideos];

for(let contador = 0; contador < arrayOfProducts.length; contador++ ){
    arrayOfProducts[contador].imprimeDatos();
}
