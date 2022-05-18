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


/*Obtener un producto especifico */
const obtenerProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(response => response.json());
}

/* Eliminar un producto */
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE'
    })
}

/*actualizar un producto*/
const actualizarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: json.stringify({nombre, precio, descripcion, imagen})
    })
}

/*Objeto general util para exportar cada una de las funciones con las operaciones de la api fetch */
export const serviciosServidor = {
    crearProducto,
    listaProductos,
    obtenerProducto,
    eliminarProducto,
    actualizarProducto,
}



























