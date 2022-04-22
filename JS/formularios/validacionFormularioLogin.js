import { validarInputs } from "./validar.js";

const inputs = document.querySelectorAll('.input');
inputs.forEach( (input) => {
    input.addEventListener('blur', (input) => {
        const clase = 'container__input-invalid';
        validarInputs(input.target, clase);
    });
});

