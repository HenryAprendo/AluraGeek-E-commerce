import { enviarDatos } from "./services.js";

const formularioAgregar = document.querySelector('[data-form-agregar]');


formularioAgregar.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Enviando datos al servidor');
    console.log(e.target);

    const nombreProducto = document.querySelector('[data-nombre]').value;
    const precioProducto = Number(document.querySelector('[data-precio]').value);
    const descripcionProducto = document.querySelector('[data-descripcion]').value;

    let inputFile = document.querySelector('[data-input-file]');

    const reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    reader.onload = e => {

        const imagenProducto = reader.result;
        
        const datos = {
            nombreProducto,
            precioProducto,
            descripcionProducto,
            imagenProducto,
        }
    
        enviarDatos(datos);
    }    

    formularioAgregar.reset();

});

























