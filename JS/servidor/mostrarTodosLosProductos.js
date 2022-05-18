import { crearProducto } from "./crearProducto.js";
import { obtenerProductos } from "./obtenerProductos.js";
import { serviciosServidor } from "./services.js";

/*Se encarga de crear los elementos en el DOM para desplegar cada uno de estos productos */
const visualizarTodosLosProductos = (datos) => {
    const seccionCompleta = document.querySelector('[data-grupo-completo]');
      
    const productos = datos;
    crearProducto(productos, seccionCompleta, true); 
    
    const eliminar = document.querySelectorAll('.modificar__eliminar');
    eliminar.forEach( item => {
        item.addEventListener('click', () => {
            const id = item.id
            console.log(`Eliminando producto con id ${id}`);
            serviciosServidor.eliminarProducto(id).then( response => console.log(response));
        });
    });

    const editar = document.querySelectorAll('.modificar__editar');
    editar.forEach( item => {
        item.addEventListener( 'click', () => {
            const id = item.id;
            console.log(`Editando producto con id ${id}`);
            window.location.href = `/screen/editarProducto.html?id=${id}`
        });
    })  
}

obtenerProductos().then( respuesta => {
    visualizarTodosLosProductos(respuesta);
} )

