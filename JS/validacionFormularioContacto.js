const formulario = document.querySelector('[data-formulario]');
const input = document.querySelector('[data-nombre]');
const mensaje = document.querySelector('[data-mensaje]');

const test = {
    campoNombre: false,
    campoMensaje: false
};


const validarNombre = (valor) => {

    const error = document.querySelector('[data-input-error]');
    error.innerHTML = '';

    const formulario = document.querySelector('[data-formulario]');

    if (valor.validity.valueMissing) {
        formulario.classList.add('contacto__formulario-error-input');
        error.innerHTML = 'Completa el campo nombre'; 
    }
    else if (valor.validity.patternMismatch) {
        formulario.classList.add('contacto__formulario-error-input');
        error.innerHTML = 'Solo letras mayúsculas, minúsculas y espacios. Maximo 40 carácteres'; 

    }
    else {
        error.innerHTML = '';
        formulario.classList.remove('contacto__formulario-error-input');
        test.campoNombre = true;     
    }
    
}


const validarMensaje = (valor) => {
    const error = document.querySelector('[data-mensaje-error]');
    error.innerHTML = '';

    if (valor.validity.valueMissing) {
        document.querySelector('[data-formulario]').classList.add('contacto__formulario-error-mensaje');
        error.innerHTML = 'Completa el campo mensaje'; 
    }
    else {
        error.innerHTML = '';
        document.querySelector('[data-formulario]').classList.remove('contacto__formulario-error-mensaje');
        test.campoMensaje = true;
    }
    
}

const mostrarMensajesDeValidacion = () => {
    const formulario = document.querySelector('[data-formulario]');
    
    const mensaje = document.querySelector('[data-incompleto]');
    mensaje.innerHTML = '';

    if (test.campoNombre && test.campoMensaje) {

        formulario.classList.remove('contacto__formulario-error-incompleto', 'contacto__formulario-error-input', 'contacto__formulario-error-mensaje');
        mensaje.classList.add('formulario__completo');
        mensaje.innerHTML = 'Su mensaje ha sido enviado con éxito';

        setTimeout( () => {
            mensaje.classList.remove('formulario__completo');
        }, 5000);

        test.campoNombre = false;
        test.campoNombre = false;

        formulario.reset();
    }
    else {
    
        formulario.classList.add('contacto__formulario-error-incompleto', 'contacto__formulario-error-input', 'contacto__formulario-error-mensaje');
        mensaje.innerHTML = 'Diligencie el formulario completamente';

    }
}



input.addEventListener('blur', input => {
    validarNombre(input.target)
});

mensaje.addEventListener('blur', mensaje => {
    validarMensaje(mensaje.target)
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    mostrarMensajesDeValidacion();
});


















