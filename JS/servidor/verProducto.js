
import { crearElemento, agregarElemento } from "./crearProducto.js";

export const verProducto = (producto) => {
    console.log(producto);
    
    const nombre = producto.nombre;
    const precio = producto.precio;
    const descripcion = producto.descripcion;
    const urlImagen = producto.imagen;

    const banner = document.querySelector('[data-banner]');
    const contenido = crearElemento('div', 'banner__contenido');

    /*Sección de la imagén*/
    const contenidoImagen = crearElemento('figure','contain__img');

    const imagen = crearElemento('img','banner__img');
    imagen.setAttribute('src', urlImagen);
    agregarElemento(contenidoImagen,imagen);

    /* Sección información*/ 
    const informacion = crearElemento('section','banner__informacion');

    const titulo = crearElemento('h2','banner__titulo');
    titulo.textContent = nombre;
    agregarElemento(informacion,titulo);

    const precios = crearElemento('p','banner__precio');
    precios.textContent = precio;
    agregarElemento(informacion,precios);

    const textoDescripcion = crearElemento('p','banner__texto');
    textoDescripcion.textContent = descripcion;
    agregarElemento(informacion,textoDescripcion);

    /*Contenedor del producto */
    agregarElemento(contenido,contenidoImagen);
    agregarElemento(contenido,informacion);

    /*Sección principal */
    agregarElemento(banner,contenido);
}








