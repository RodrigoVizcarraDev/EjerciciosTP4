// Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.
// Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.

let persona = {
    nombre: "Rodrigo",
    apellido: "Vizcarra",
    estudiante: true,
    hobbies: [
        "Ver peliculas",
        "Comer",
        "Programar",
        "Acariciar a mis gatos"
    ],
    presentacion() {
        let presentacion = "";
        presentacion += `Hola mi nombre y apellido es ${this.nombre} ${this.apellido}<br> Mis hobbies son:<br><ul>`;
        for (let hobbie in this.hobbies) {
            presentacion += `<li>${hobbie} ${this.hobbies[hobbie]}</li>`
        }
        presentacion += `</ul>`;
        return presentacion;
    },
    agregarHobbie(hobbieAgregado) {
        if (isNaN(hobbieAgregado)) {
            this.hobbies.push(hobbieAgregado);
        } else {
            alert("Debe agregar texto");
        }
    },
    borrarHobbie(eleccion) {
        this.hobbies.splice(eleccion,1);
    }
}

let miBoton = document.getElementById("miBoton");
let miBoton2 = document.getElementById("miBoton2");

let botonPresentar = document.getElementById("botonPresentar")
let inputAgregarHobbie = document.getElementById("elemento");
let inputBorrarHobbie = document.getElementById("elemento2");
console.log(typeof inputBorrarHobbie);
let parrafoPresentacion = document.getElementById("personaPresentada");


//Agregar hobbie
miBoton.addEventListener("click", (evento) => {

    
    evento.preventDefault();

    let nuevoHobbie = inputAgregarHobbie.value;

    if (nuevoHobbie.trim() !== "") {
        persona.agregarHobbie(nuevoHobbie);
        inputAgregarHobbie.value = "";
    }
})


//Presentar persona
botonPresentar.addEventListener("click", (evento) => {
    evento.preventDefault();
    parrafoPresentacion.innerHTML = persona.presentacion();
});

//Borrar hobbie
miBoton2.addEventListener("click",(evento) =>{
    evento.preventDefault();
    let valorBorrado = parseInt(inputBorrarHobbie.value);   
    persona.borrarHobbie(valorBorrado);
    inputBorrarHobbie.value = "";

})
