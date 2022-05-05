import { serviciosServidor } from "./services.js";

/*Se encarga de crear los elementos en el DOM para desplegar cada uno de estos productos */
const visualizarProductos = (datos) => {


   const crearProducto = (seccion) => {
    seccion.forEach(producto => {
        const nombre = producto.nombre;
        const precio = producto.precio;
        const urlImage = producto.imagen;

        const seccion = document.querySelector('[data-test]');

        const cover = document.createElement('div');
        cover.classList.add('card');

        const coverInfo = document.createElement('div');
        coverInfo.classList.add('product__info');

        const infoNombre = document.createElement('p');
        infoNombre.classList.add('card__name');
        infoNombre.innerHTML = nombre;

        const infoPrecio= document.createElement('p');
        infoPrecio.classList.add('card__price');
        infoPrecio.innerHTML = `$ ${precio}`;

        const infoEnlace = document.createElement('a');
        infoEnlace.classList.add('card__enlace');
        infoEnlace.textContent = 'Ver producto';

        coverInfo.appendChild(infoNombre);
        coverInfo.appendChild(infoPrecio);
        coverInfo.appendChild(infoEnlace);

        cover.appendChild(coverInfo);
        seccion.appendChild(cover);



        //     `<div class="card">
        //     <img class="card_img" src="./img/start-wars/1-start-wars.png" alt="start-wars">
        //     <div class="product__info">
        //         <p class="card__name">Producto XYZ</p>
        //         <p class="card__price">$ 60,00</p>
        //         <a class="card__enlace">Ver producto</a>
        //     </div>
        //     </div>`
    });
   }

   crearProducto(datos.startwars);
//    crearProducto(datos.consolas);
//    crearProducto(datos.diversos);

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