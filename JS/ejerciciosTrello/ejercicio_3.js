// Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:
// Mostrar la tabla completa
// filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.
// Buscar un producto serum y mostrarlo por pantalla,
// Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.

let listaProductos = [
    {
        nombreProducto: "Hidratante facial",
        precio: 3500,
        categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
        nombreProducto: "Protector solar factor 50",
        precio: 3300,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar toque seco factor 50",
        precio: 4100,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar con color factor 50",
        precio: 3850.5,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Gel de limpieza facial",
        precio: 1740.99,
        categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
        nombreProducto: "Exfoliante de azúcar cherry",
        precio: 1200,
        categoria: "Labios",
    },
    {
        nombreProducto: "Pads de hidrogel para contorno de ojos",
        precio: 2800,
        categoria: "Ojos",
    },
    {
        nombreProducto: "Mascarilla facial",
        precio: 3250.99,
        categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
        nombreProducto: "Protector solar en barra",
        precio: 3800,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Mascara de hidratación y reparación",
        precio: 1200,
        categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];

// El método "Object.entries()" devuelve una matriz bidimensional de un objeto, donde cada elemento de la matriz es un arreglo que contiene la clave y el valor de cada propiedad del objeto. Podemos usar Object.entries para convertir el objeto en un array matriz [[],[],[]]

const funcionTablaProductos = function (listaProductos) {
    let eleccionUsuario = +prompt(`
    1: Mostrar tabla completa,
    2: Buscar "Protectores solares",
    3: Buscar "serum" y enseñarlo en pantalla,
    4: Buscar un producto "Bruma"`
    );

    let tabla = `<table>`;
    tabla += `<tr>`
    tabla += `<th>`
    tabla += `Producto`
    tabla += `</th>`
    tabla += `<th>`
    tabla += `Categoria`;
    tabla += `</th>`;
    tabla += `<th>`;
    tabla += `Precio`;
    tabla += `</th>`;

    switch (eleccionUsuario) {
        case 1:

            listaProductos.forEach((elemento) => {
                tabla += `<tr>`
                tabla += `<td>`
                tabla += `${elemento.nombreProducto}`
                tabla += `</td>`

                tabla += `<td>`
                tabla += `${elemento.precio}`
                tabla += `</td>`

                tabla += `<td>`
                tabla += `${elemento.categoria}`
                tabla += `</td>`

                tabla += `</tr>`
                
            });
            document.write(tabla);
            break;
        case 2:
            listaProductos.forEach((producto)=>{
                if(producto.nombreProducto.includes("Protector solar")){
                    tabla+=`<tr>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.nombreProducto}`;
                    tabla+=`</td>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.precio}`;
                    tabla+=`</td>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.categoria}`;
                    tabla+=`</td>`;
                    
                    tabla+=`</tr>`;
                };
                
            });
            document.write(tabla);
            break;
        case 3:
            listaProductos.forEach((producto)=>{
                if(producto.nombreProducto.includes("Sérum")){
                    tabla+=`<tr>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.nombreProducto}`;
                    tabla+=`</td>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.precio}`;
                    tabla+=`</td>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.categoria}`;
                    tabla+=`</td>`;
                    
                    tabla+=`</tr>`;
                };
                
            });
            document.write(tabla);
            break;
        case 4:
            for(let producto of listaProductos){
                if(producto.nombreProducto.includes("Bruma")){
                    tabla+=`<tr>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.nombreProducto}`;
                    tabla+=`</td>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.precio}`;
                    tabla+=`</td>`;
    
                    tabla+=`<td>`;
                    tabla+=`${producto.categoria}`;
                    tabla+=`</td>`;
                    
                    tabla+=`</tr>`;
                }else{
                    document.write(`<h1>No existe bruma en la lista de productos</h1>`);
                    break;
                }
            }
            
            document.write(tabla);
            break;

    }
}
funcionTablaProductos(listaProductos);