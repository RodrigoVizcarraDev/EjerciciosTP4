// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

class Contacto {
    #nombre;
    #numTelefono;
    constructor(nombre, numTelefono) {
        this.#nombre = nombre;
        this.#numTelefono = numTelefono;
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(setNombre) {
        this.#nombre = setNombre;
    }

    get numTelefono() {
        return this.#numTelefono;
    }

    set numTelefono(setNumTelefono) {
        this.#numTelefono = setNumTelefono;
    }
}

// AGENDA CLASE
class AgendaContactos {
    #agenda;
    constructor(agenda = new Array(10)) {
        console.log("Añadiendo tamaño de array")
        this.#agenda = new Array(agenda);
    }
    get agenda() {
        return this.#agenda;
    }
    set agenda(setAgenda) {
        this.#agenda = setAgenda;
    }

    // METODOS DE LA AGENDA 
    añadirContacto(contacto_a_aniadir) {
        // Comprobando si hay espacios libres en agenda
        if(this.#agenda.includes(undefined)){
            
            
            for (let i = 0; i < this.#agenda.length; i++) {
                
                // Comprobando posicion por posicion si dentro de #agenda = [{},{},{}] hay un elemento con undefined
                // De ser que si, añadimos el contacto ahi.
                if (this.#agenda[i] === undefined) {

                    // No logre verificar si el nombre del nuevo contacto agregado es igual a uno ya guardado
                    this.#agenda[i] = contacto_a_aniadir;
                    console.log(`Se agrego el contacto ${contacto_a_aniadir.nombre}`);
                    console.log(this.#agenda);
                    
                    // El break es importante ya que va a agendar el primer contacto en todas las posiciones
                    break;
                }
            }
        }else{
            alert("No hay mas espacios libre en su agenda");
        }
        
    }

    ultimoContacto(){
        let arreglosOcupados;
        arreglosOcupados = this.#agenda.filter((objetos)=>{
            return objetos != undefined;
        })
        
        alert(`El ultimo contacto que agrego es: 
             Nombre: ${arreglosOcupados[arreglosOcupados.length - 1].nombre}
             Numero: ${arreglosOcupados[arreglosOcupados.length - 1].numTelefono}`);
    }

    buscarContacto(nombreContacto){
        this.#agenda.forEach((contacto) =>{
            if(contacto.nombre.includes(nombreContacto)){
                alert(`Su contacto si existe y es: ${contacto.nombre} ${contacto.numTelefono}`);
            }
        });
    }

    mostrarAgenda() {
        let agenda = ``;
        this.#agenda.forEach((contacto,indice) =>{
            agenda += `
        ||Contacto posicion ${indice+1}: 
        ||Nombre: ${contacto.nombre} 
        ||Telefono: ${contacto.numTelefono}`
        });
        alert(agenda);
    }

    eliminarContacto(posicionEliminar){
    
        this.#agenda.splice(posicionEliminar, 1);
        alert(`Se elimino el elemento de la posicion ${posicionEliminar}`);
    }

    verificarCapacidadAgenda(){
        let capacidadDeAgenda = 0;
        for(let i = 0; i < this.#agenda.length; i++){
            if(this.#agenda[i] === undefined){
                capacidadDeAgenda++;
            }
        }
        alert(`Tiene espacio para ${capacidadDeAgenda} contactos`);
        
    }
}

// Pregunta para entrar al programa o no
let confirmacion = confirm("En este programa podra agendar contactos, click en aceptar para entrar o click en cancelar para no entrar");
if (confirmacion) {

    // Indicando tamaño de lista de contactos
    let eleccionTamañoListaContacto = +prompt("Indique que tamaño tendra su lista de contactos");
    alert(`Su lista de contactos tendra ${eleccionTamañoListaContacto} espacios`);

    // Creando objeto de la clase AgendaContactos
    let agendaCreadaUsuario = new AgendaContactos(eleccionTamañoListaContacto);
    alert(`Se creo su agenda de contactos`);

    do {
        let eleccionUsuario_2 = +prompt(`
        1: Añadir contacto x
        2: Saber si existe ultimo contacto que agregue x
        3: listar contactos x
        4: Buscar contacto x
        5: Eliminar un contacto
        6: Verificar capacidad de la agenda
        7: Salir
        `);
        switch (eleccionUsuario_2) {
            case 1:         
                let nombreContactoUsuario = prompt("Indique el nombre de su contacto");
                let numeroContactoUsuario = +prompt("Indique el numero de su contacto");
                

                // Creando objeto de la clase contacto
                let contactoCreadoUsuario = new Contacto(nombreContactoUsuario, numeroContactoUsuario);
                // Añadiendo contacto a la agenda
                agendaCreadaUsuario.añadirContacto(contactoCreadoUsuario);
                alert(`Se añadio el contacto de nombre ${contactoCreadoUsuario.nombre} en su agenda`);

                confirmacion = confirm("Aceptar para volver al menu de opciones, Cancelar para salir");
                break;
            case 2:
                agendaCreadaUsuario.ultimoContacto();
                confirmacion = confirm("Aceptar para volver al menu de opciones, Cancelar para salir");
                break;
               
            case 3:
                agendaCreadaUsuario.mostrarAgenda();
                confirmacion = confirm("Aceptar para volver al menu de opciones, Cancelar para salir");
                break;
            case 4:
                let nombreContacto = prompt("Ingrese el nombre del contacto que desea buscar");
                agendaCreadaUsuario.buscarContacto(nombreContacto);
                confirmacion = confirm("Aceptar para volver al menu de opciones, Cancelar para salir");
                break;
            case 5:
                let agenda = ``;
                agendaCreadaUsuario.agenda.forEach((contacto,indice) =>{
                    agenda += `
                ||Contacto posicion ${indice}: 
                ||${contacto.nombre} ${contacto.numTelefono}`
                });
                alert(agenda);
                let numero = +prompt("Indique su contacto a eliminar con su respectivo numero");

                agendaCreadaUsuario.eliminarContacto(numero);
                confirmacion = confirm("Aceptar para volver al menu de opciones, Cancelar para salir");
                break;
            case 6:
                agendaCreadaUsuario.verificarCapacidadAgenda();
                confirmacion = confirm("Aceptar para volver al menu de opciones, Cancelar para salir");
                break;
            case 7:
                confirmacion = false;
                break;
        }
    } while (confirmacion)

} else {
    alert("Adios");
}
