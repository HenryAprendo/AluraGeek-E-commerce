import { activarDesactivarBoton } from './activarDesactivarBoton.js'

const inputEmail = document.querySelector('[data-correo]');
const inputPassword = document.querySelector('[data-password]');

const botonEntrar = document.querySelector('[data-entrar]');   
botonEntrar.setAttribute('disabled', true);

export const habilitarBotonEntrar = (evento) => {
    evento.preventDefault();

    const validarEmail = inputEmail.validity.valid;
    const validarPassword = inputPassword.validity.valid;
    const validacionInputs = (validarEmail && validarPassword);
    
    const clase = 'login__btn-activar';
    activarDesactivarBoton(botonEntrar, validacionInputs, clase);
}

/*Autenticación del usuario */
export const loginUsuario = () => {

    const correoAdmin = 'henry@alura.com';
    const passwordAdmin = 'Admingeek1';
    
    if ( (inputEmail.value === correoAdmin) && (inputPassword.value === passwordAdmin) ) {
        window.location.href = "/todosLosProductos.html";
    }
    else {
        botonEntrar.nextElementSibling.classList.add('correo-contraseña-invalida');
        setTimeout( () => {
            botonEntrar.nextElementSibling.classList.remove('correo-contraseña-invalida');
        }, 5000);
    }

}










