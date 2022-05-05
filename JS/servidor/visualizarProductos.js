import { serviciosServidor } from "./services.js";

/*Se encarga de crear los elementos en el DOM para desplegar cada uno de estos productos */
const visualizarProductos = (datos) => {


   const crearProducto = (seccion) => {
    seccion.forEach(producto => {
        console.log(producto);
    });
   }

   crearProducto(datos.startwars);
   crearProducto(datos.consolas);
   crearProducto(datos.diversos);

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