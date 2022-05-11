import {serviciosServidor} from './services.js'
import { verProducto } from './verProducto.js'

const detalleProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if(id === null){
        console.log('Crear pagina de error window.location.href = /screens/error.html');
    }
   
    try {
        const detalleDelProducto = await serviciosServidor.obtenerProducto(id);
        if (detalleDelProducto) {
            verProducto(detalleDelProducto);
        }
        else {
            throw new Error('Fallas al traer datos del servidor');
        }


    } catch(error) {
        console.error('Error', error);
    }
    
    
}

detalleProducto();