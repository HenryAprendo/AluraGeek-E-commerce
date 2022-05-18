import { serviciosServidor } from "./services.js";

const formularioAgregar = document.querySelector('[data-form-agregar]');

formularioAgregar.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Enviando datos al servidor');
    console.log(e.target);

    const nombreProducto = document.querySelector('[data-nombre]').value;
    const precioProducto = Number(document.querySelector('[data-precio]').value);
    const descripcionProducto = document.querySelector('[data-descripcion]').value;

    let inputFile = document.querySelector('[data-input-file]');
    const data = inputFile.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = e => {

        const imagenProducto = reader.result;
        
        // const datos = {
        //     nombreProducto,
        //     precioProducto,
        //     descripcionProducto,
        //     imagenProducto,
        // }
    
        serviciosServidor.crearProducto(nombreProducto, precioProducto, descripcionProducto,imagenProducto, uuid.v4());
    }    

});
   


























