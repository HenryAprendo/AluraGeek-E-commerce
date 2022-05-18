import {serviciosServidor} from './services.js';


const actualizarProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if(id === null){
        console.log('Crear pagina de error window.location.href = /screens/error.html');
    }
   
    // LLenando los campos del formulario con los datos provenientes del db.json
    const nombre = document.querySelector('[data-nombre]');
    const precio = document.querySelector('[data-precio]');
    const descripcion = document.querySelector('[data-descripcion]');


    try {
        const producto = await serviciosServidor.obtenerProducto(id);
        if (producto.nombre && producto.precio && producto.descripcion) {
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        }
        else {
            throw new Error('Fallas al traer datos del servidor');
        }


    } catch(error) {
        console.error('Error', error);
    }
    
    
}

actualizarProducto();


//Enviandos cambios al servidor nuevamente

const formularioEditar = document.querySelector('[data-form-editar]');
formularioEditar.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log("Enviando cambios al servidor ");

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    let inputFile = document.querySelector('[data-input-file]');
    const data = inputFile.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = e => {

        const imagen = reader.result;

        serviciosServidor.actualizarProducto(nombre, precio, descripcion, imagen, id);
        
    }     

});


















