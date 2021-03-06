const errores = ['valueMissing', 'patternMismatch', 'tooShort'];

export const validarInputs = (input, clase) => {   
    const tipoDeInput = input.name;
    console.log(tipoDeInput);
    let tipoDeError = '';
    let limpiar= '';

    errores.forEach( error => {
        if (input.validity[error]) {
           tipoDeError = error;
        }
    });
    
    if (input.validity.valid) {
        input.parentElement.classList.remove(clase);
        input.nextElementSibling.innerHTML = limpiar;
    }
    else {
        input.parentElement.classList.add(clase);
        input.nextElementSibling.innerHTML = limpiar;

        if (input.validity.valueMissing) {
            input.nextElementSibling.innerHTML = mostrarMensajeError(tipoDeInput, tipoDeError);
        }
        else if (input.validity.patternMismatch) {
            input.nextElementSibling.innerHTML = mostrarMensajeError(tipoDeInput, tipoDeError);
        }
        else if (input.validity.tooShort) {
            input.nextElementSibling.innerHTML = mostrarMensajeError(tipoDeInput, tipoDeError);
        }
        
    }
};

const mensajesErrores = {
    /*Formulario Login */
    email:  {
        valueMissing: 'Completa este campo',
        patternMismatch: 'formato requerido correo@alura.com'
    },
    
    password: {
        valueMissing: 'Completa este campo',
        patternMismatch: 'Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.'
    },

    /*Formulario agregar producto */
    nombre:  {
        valueMissing: 'Completa este campo',
        patternMismatch: 'El formato requerido es solo letras Ejemplo: Consola'
    },
    precio:  {
        valueMissing: 'Completa este campo',
        patternMismatch: 'El formato requerido es solo números, mínimo 2 y máximo 10'
    },
    mensaje:  {
        valueMissing: 'Completa este campo',
        patternMismatch: 'Cumple con el formato requerido',
        tooShort: 'Mínimo 20 carácteres',
    }

}

function mostrarMensajeError(tipo, error) {
    const mensaje = mensajesErrores[tipo][error];
    return mensaje;
}









