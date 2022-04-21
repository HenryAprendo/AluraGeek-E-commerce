const formulario = document.querySelector('[data-formulario]');
const input = document.querySelector('[data-nombre]');
const mensaje = document.querySelector('[data-mensaje]');

const test = {
    campoNombre: false,
    campoMensaje: false
};

function addClass(elemento, clase) {
    elemento.classList.add(clase);
}

function removeClass(elemento, clase) {
    elemento.classList.remove(clase);
}





const validarNombre = (valor) => {

    const error = document.querySelector('[data-input-error]');
    error.innerHTML = '';

    const formulario = document.querySelector('[data-formulario]');
    const clase = 'contacto__formulario-error-input';

    if (valor.validity.valueMissing) {
        addClass(formulario, clase);
        error.innerHTML = 'Completa el campo nombre'; 
    }
    else if (valor.validity.patternMismatch) {
        addClass(formulario, clase);
        error.innerHTML = 'Solo letras mayúsculas, minúsculas y espacios. Maximo 40 carácteres'; 

    }
    else {
        error.innerHTML = '';
        removeClass(formulario, clase);
        test.campoNombre = true;     
    }
    
}


const validarMensaje = (valor) => {
    const error = document.querySelector('[data-mensaje-error]');
    error.innerHTML = '';

    const formulario = document.querySelector('[data-formulario]');
    const clase = 'contacto__formulario-error-mensaje';

    if (valor.validity.valueMissing) {
        addClass(formulario, clase); 
        error.innerHTML = 'Completa el campo mensaje'; 
    }
    else {
        error.innerHTML = '';
        removeClass(formulario, clase);
        test.campoMensaje = true;
    }
    
}

const mostrarMensajesDeValidacion = () => {
    
    const mensaje = document.querySelector('[data-incompleto]');
    mensaje.innerHTML = '';

    const formulario = document.querySelector('[data-formulario]');
    const clase = 'formulario__completo';
    const grupoDeClases = [ 'contacto__formulario-error-incompleto', 'contacto__formulario-error-input', 'contacto__formulario-error-mensaje' ];

    if (test.campoNombre && test.campoMensaje) {

        formulario.classList.remove('contacto__formulario-error-incompleto', 'contacto__formulario-error-input', 'contacto__formulario-error-mensaje');
        // removeClass(formulario, grupoDeClases);
        addClass(mensaje, clase);
        mensaje.innerHTML = 'Su mensaje ha sido enviado con éxito';

        setTimeout( () => {
            removeClass(mensaje, clase);
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


















