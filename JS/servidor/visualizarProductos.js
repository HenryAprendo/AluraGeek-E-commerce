import { crearProducto } from "./crearProducto.js";
import { obtenerProductos } from "./obtenerProductos.js";

/*Se encarga de crear los elementos en el DOM para desplegar cada uno de estos productos */
const visualizarProductos = (datos) => {
   const seccionStart = document.querySelector('[data-primer-grupo]');
   const seccionConsola = document.querySelector('[data-segundo-grupo]');
   const seccionDiversos = document.querySelector('[data-tercer-grupo]');


   const categoriaStarwars = [];
   const categoriaConsolas = [];
   const categoriaDiversos = [];


   datos.forEach( item => {
      if (item.categoria === "star-wars") {
         categoriaStarwars.push(item);
      }
      else if(item.categoria === "consolas"){
         categoriaConsolas.push(item);
      }
      else {
         categoriaDiversos.push(item);
      }
   });
   

   crearProducto(categoriaStarwars, seccionStart);
   crearProducto(categoriaConsolas, seccionConsola);
   crearProducto(categoriaDiversos, seccionDiversos);

}

 obtenerProductos().then( respuesta => {
    console.log(respuesta);
    visualizarProductos(respuesta);
 } )

