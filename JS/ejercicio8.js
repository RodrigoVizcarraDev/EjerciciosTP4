// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona{
    #nombre;
    #edad;
    #profesion;

    constructor(nombre,edad,profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(setNombre){
        this.#nombre = setNombre;
    }

    get edad(){
        return this.#edad;
    }

    set edad(setEdad){
        this.#edad = setEdad;
    }

    get profesion(){
        return this.#profesion;
    }

    set profesion(setProfesion){
        this.#profesion = setProfesion;
    }

    saludar(){
        alert(`
        Hola mi nombre es: ${this.#nombre}
        y tengo ${this.#edad} trabajo de ${this.#profesion}`);
    }

    despedirse(){
        alert(`
        Hola mi nombre es: ${this.#nombre}
        y tengo ${this.#edad} trabajo de ${this.#profesion} me despido de ti humano`);
    }
}

let persona1 = new Persona("Rodrigo",26,"Recolector de sonrrisas");
let persona2 = new Persona("Florencia",32,"Oficinista");

persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();