const formularioAgregar = document.querySelector('[data-form-agregar]');



formularioAgregar.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Enviando datos al servidor');
    console.log(e.target);

    const nombreProducto = document.querySelector('[data-nombre]').value;
    const precioProducto = Number(document.querySelector('[data-precio]').value);
    const descripcionProducto = document.querySelector('[data-descripcion]').value;


    const datos = {
        nombreProducto,
        precioProducto,
        descripcionProducto,
    }

    enviarDatos(datos);
});


function enviarDatos(datos){
    console.log(datos);
}























