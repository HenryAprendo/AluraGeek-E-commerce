import {serviciosServidor} from './services.js'

const detalleProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    console.log(typeof(id));

    if(id === null){
        console.log('Crear pagina de error window.location.href = /screens/error.html');
    }

   
    const detalle = await serviciosServidor.obtenerProducto(id);
    
    console.log(detalle);
    
}

detalleProducto();