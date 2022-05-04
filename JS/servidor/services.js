/* Crear un producto y enviarlo al servidor 'POST' */
const crearProducto = (nombre, precio, descripcion, imagen, id) => {
    fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ nombre, precio, descripcion, imagen, id })
    });
}

/* Traer los datos del servidor por default es 'GET'*/
const listaProductos = () => fetch('http://localhost:3000/productos').then( response => response.json());

/*Objeto general util para exportar cada una de las funciones con las operaciones de la api fetch */
export const serviciosServidor = {
    crearProducto,
    listaProductos,
}