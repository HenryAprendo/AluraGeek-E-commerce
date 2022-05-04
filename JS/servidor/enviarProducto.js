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

    
    // formularioAgregar.reset();
    // location.reload();

});


// const removerImagen = () => {

//     let zonaDropImagen = document.querySelector('.zona__drog__imagen');    

//     if (zonaDropImagen) {
//         zonaDropImagen.classList.remove('zona__drog__imagen');
//     }
    
//     let zonaDropElemento = document.querySelector('.zona__drog__prompt')

//     if (!zonaDropElemento) {
//         const zonaDrop = document.querySelector('.zona__drog');
//         const content = ` 
//         <figure class="zona__drog__prompt ">
//             <picture>
//                 <!-- <source media="(min-width: 1130px)" srcset="./img/logo/Geek.png"> -->
//                 <source media="(min-width: 768px)" srcset="./img/logo/insertar.png">
//                 <img src="./img/logo/add.png" alt="agregar">
//             </picture>
//             <figcaption class="zona__drog__texto" >Arrastre o haga click para agregar una imagén para el producto</figcaption>
//         </figure>`;

//         zonaDrop.innerHTML = content;
//     }
// }

























