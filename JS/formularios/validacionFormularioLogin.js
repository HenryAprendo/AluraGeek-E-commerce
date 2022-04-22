import { validarInputs } from "./validar.js";
import { habilitarBotonEntrar, loginUsuario } from "./habilitarbotonEntrar.js";

/*Validación de inputs del formulario login */
const inputs = document.querySelectorAll('.input');
inputs.forEach( (input) => {
    input.addEventListener('blur', (input) => {
        const clase = 'container__input-invalid';
        validarInputs(input.target, clase);
    });
});

/*Enviar formulario completo */
const formularioLogin = document.querySelector('[data-form-login]');
formularioLogin.addEventListener('keyup', evento => habilitarBotonEntrar(evento) );


/*Entrando como administrador */
 
formularioLogin.addEventListener('submit', (evento) => {
        evento.preventDefault();
        console.log('entrando al administrador');

        loginUsuario();   
});


















