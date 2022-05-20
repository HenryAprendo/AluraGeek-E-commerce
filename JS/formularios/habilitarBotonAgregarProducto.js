import { activarDesactivarBoton } from "./activarDesactivarBoton.js";


const inputNombre = document.querySelector('[data-nombre]');
const inputPrecio = document.querySelector('[data-precio]');
const inputDescripcion = document.querySelector('[data-descripcion]');

const botonAgregar = document.querySelector('[data-agregar]');   
botonAgregar.setAttribute('disabled', true);

export const habilitarBotonAgregar = (evento) => {
    evento.preventDefault();

    const validarNombre = inputNombre.validity.valid;
    const validarPrecio = inputPrecio.validity.valid;
    const validarDescripcion = inputDescripcion.validity.valid;

    const validacionInputs = (validarNombre && validarPrecio && validarDescripcion);

    const clase = 'login__btn-activar';
    activarDesactivarBoton(botonAgregar, validacionInputs, clase);   

}













