const crearElemento = (tipo, clase) => {
    const elemento = document.createElement(tipo);
    elemento.classList.add(clase);
    return elemento;
}

const agregarElemento = (parent,child) => {
    parent.appendChild(child);
}


export const crearProducto = (data, seccionProducto) => {
    
    data.forEach( (producto, index) => {

        let contenido = 'Ver producto';
        
        // if (key) {
        //     contenido = producto.id
        // }

        const nombre = producto.nombre;
        const precio = producto.precio;
        const urlImagen = producto.imagen


        const cover = crearElemento('div','card');
        if (index > 3) {
            cover.classList.add('card__adicional');
        }


        const imagen = crearElemento('img','card_img');
        imagen.alt = 'foto del producto';
        imagen.setAttribute('src', urlImagen);

        const coverInfo = crearElemento('div','product__info');
        const infoNombre = crearElemento('p','card__name');
        infoNombre.textContent = nombre;
        agregarElemento(coverInfo,infoNombre);

        const infoPrecio= crearElemento('p','card__price');
        infoPrecio.textContent = `$ ${precio}`;
        agregarElemento(coverInfo, infoPrecio);

        const infoEnlace = crearElemento('a','card__enlace');
        infoEnlace.textContent = contenido;      
        agregarElemento(coverInfo, infoEnlace);

        /*Contenedor de producto */
        agregarElemento(cover, imagen);
        agregarElemento(cover, coverInfo);

        /*Sección principal */
        agregarElemento(seccionProducto,cover);
 
    });
   }






