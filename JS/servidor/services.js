
const crearProducto = (nombre, precio, descripcion, imagen, id) => {
    fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ nombre, precio, descripcion, imagen, id })
    });
}


export const serviciosServidor = {
    crearProducto,
}