import { validarInputs } from "./validar.js";

const inputs = document.querySelectorAll('.input');
inputs.forEach( (input) => {
    input.addEventListener('blur', (input) => {
        validarInputs(input.target);
    });
});

