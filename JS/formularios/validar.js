export const validarInputs = (input) => {   

    const tipoDeInput = input.name;
    console.log(tipoDeInput);

    if (input.validity.valid) {
        console.log('valido')

        input.parentElement.classList.remove('container__input-invalid');
        input.nextElementSibling.innerHTML = '';
    }
    else {
        console.log('Invalido')
        input.parentElement.classList.add('container__input-invalid');
        
        if (input.validity.valueMissing) {
            input.nextElementSibling.innerHTML = mostrarMensajeError(tipoDeInput);
        }
        else if (input.validity.patternMismatch) {
            input.nextElementSibling.innerHTML = `formato requerido correo@alura.com`;
        }
    }
};


const mensajesErrores = {
    email:  {
        valueMissing: `Completa este campo`,
        patternMismatch: `formato requerido correo@alura.com`
    },
    
    password: {
        valueMissing: `Completa este campo`,
        patternMismatch: `Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, 
                        una letra mayúscula, un número y no puede contener caracteres especiales.`
    }

}


function mostrarMensajeError(tipo) {
    const mensaje = mensajesErrores[tipo];
    console.log(mensaje);
}


