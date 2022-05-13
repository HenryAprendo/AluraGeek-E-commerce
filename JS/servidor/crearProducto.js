export const crearElemento = (tipo, clase) => {
    const elemento = document.createElement(tipo);
    elemento.classList.add(clase);
    return elemento;
}

export const agregarElemento = (parent,child) => {
    parent.appendChild(child);
}


export const crearProducto = (data, seccionProducto, modificar) => {
    
    data.forEach( (producto, index) => {

        let contenido = 'Ver producto';

        const nombre = producto.nombre;
        const precio = producto.precio;
        const urlImagen = producto.imagen
        const id = producto.id;

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
        infoEnlace.href = `producto.html?id=${id}`;
        infoEnlace.textContent = contenido;      
        agregarElemento(coverInfo, infoEnlace);

        /*Contenedor de producto */
        agregarElemento(cover, imagen);
        agregarElemento(cover, coverInfo);


        // Logos de eliminar y editar;
        const modificarElemento = crearElemento('div','card__modificar');

        if (modificar) {
            const eliminar = crearElemento('img','modificar__eliminar');
            eliminar.setAttribute('src', './img/logo/logoEliminar.png');
            modificarElemento.appendChild(eliminar);
            const editar= crearElemento('img','modificar__editar');
            editar.setAttribute('src', './img/logo/logoEditar.png');
            modificarElemento.appendChild(editar);
        }

        agregarElemento(cover, modificarElemento);

        /*Sección principal */
        agregarElemento(seccionProducto,cover);
 
    });
   }






