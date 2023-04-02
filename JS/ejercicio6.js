// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro{
    //Propiedades privadas
    #isbn = "0-000-00000-0";
    #titulo = "Titulo";
    #autor = "Autor";
    #numeroPaginas = 0;

    // Constructor
    constructor(isbn,titulo,autor,numeroPaginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroPaginas = numeroPaginas;
    }

    //Metodos get
    get isbn(){
        return this.#isbn;
    }
    get titulo(){
        return this.#titulo;
    }
    get autor(){
        return this.#autor;
    }
    get numeroPaginas(){
        return this.#numeroPaginas;
    }
    //Metodos set
    set isbn(setIsbn){
        this.#isbn = setIsbn;
    }
    set titulo(setTitulo){
        this.#titulo = setTitulo;
    }
    set autor(setAutor){
        this.#autor = setAutor;
    }
    set numeroPaginas(setNumeroPaginas){
        this.#numeroPaginas = setNumeroPaginas;
    }


    mostrarLibro(){
        document.write(`El libro ${this.#titulo} con ISBN ${this.#isbn} creado por ${this.#autor} tiene ${this.#numeroPaginas} paginas`);
    }
}

let el_senior_de_los_anillos = new Libro("8845292614", "El Señor de los Anillos","J.R.Tolkien", 1392);
let the_witcher = new Libro("9788498891270", "The Witcher","Andrzej Sapkowski", 264);

// Comprobando cual de los libros tiene mas paginas
 if(el_senior_de_los_anillos.numeroPaginas > the_witcher.numeroPaginas){
    console.log(`El libro ${el_senior_de_los_anillos.titulo} tiene mas paginas que ${the_witcher.titulo}`);
 }else{
    console.log(`El libro ${the_witcher.titulo} tiene mas paginas que ${el_senior_de_los_anillos.titulo}`);
 }