import { crearProducto } from "./crearProducto.js";
import { obtenerProductos } from "./obtenerProductos.js";

/*Se encarga de crear los elementos en el DOM para desplegar cada uno de estos productos */
const visualizarProductos = (datos) => {
    const seccionStart = document.querySelector('[data-primer-grupo]');
    const seccionConsola = document.querySelector('[data-segundo-grupo]');
    const seccionDiversos = document.querySelector('[data-tercer-grupo]');

   crearProducto(datos.startwars, seccionStart);
   crearProducto(datos.consolas, seccionConsola);
   crearProducto(datos.diversos, seccionDiversos);

}

 obtenerProductos().then( respuesta => {
    visualizarProductos(respuesta);
 } )

