import { serviciosServidor } from "./services.js";

/*Haciendo la petición para traer los datos del producto con async y await desde el servidor*/
export const obtenerProductos = async () => {
    try {
        const data = await serviciosServidor.listaProductos();
        if (data){
            return data;
        }
        else {
            throw new Error('Fallas al traer datos del servidor');
        }

    } catch(error) {
        console.error('Error', error);
    }
}