import { crearProducto } from "./crearProducto.js";
import { obtenerProductos } from "./obtenerProductos.js";

/*Se encarga de crear los elementos en el DOM para desplegar cada uno de estos productos */
const visualizarTodosLosProductos = (datos) => {
    const seccionCompleta = document.querySelector('[data-grupo-completo]');
      
    const productos = datos;
    crearProducto(productos, seccionCompleta);  

}

obtenerProductos().then( respuesta => {
    visualizarTodosLosProductos(respuesta);
} )