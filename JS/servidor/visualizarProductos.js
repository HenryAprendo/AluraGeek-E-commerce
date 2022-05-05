import { serviciosServidor } from "./services.js";
import { crearProducto } from "./crearProducto.js";

/*Se encarga de crear los elementos en el DOM para desplegar cada uno de estos productos */
const visualizarProductos = (datos) => {
    const seccionStart = document.querySelector('[data-primer-grupo]');
    const seccionConsola = document.querySelector('[data-segundo-grupo]');
    const seccionDiversos = document.querySelector('[data-tercer-grupo]');

   crearProducto(datos.startwars, seccionStart);
   crearProducto(datos.consolas, seccionConsola);
   crearProducto(datos.diversos, seccionDiversos);

}


/*Haciendo la petición para traer los datos del producto con async y await desde el servidor*/
const obtenerProductos = async () => {
    try {
        const data = await serviciosServidor.listaProductos();
        if (data){
            visualizarProductos(data);
        }
        else {
            throw new Error()
        }

    } catch(error) {
        console.error('Error', error);
    }
}

obtenerProductos();