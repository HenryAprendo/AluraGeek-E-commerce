import { validarInputs } from "./validar.js";
import { habilitarBotonAgregar} from "./habilitarBotonAgregarProducto.js"

/*Validación de inputs del formulario login */
const inputs = document.querySelectorAll('.input');
inputs.forEach( (input) => {
    input.addEventListener('blur', (input) => {
        const clase = 'container__input-invalid';
        validarInputs(input.target, clase);
    });
});


/*Enviar formulario completo */
const formularioAgregar = document.querySelector('[data-form-agregar]');
formularioAgregar.addEventListener('keyup', evento => habilitarBotonAgregar(evento) );
