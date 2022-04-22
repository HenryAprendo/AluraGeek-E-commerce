/*Declaración de variables generales*/

const formulario = document.querySelector('[data-formulario]');
const input = document.querySelector('[data-nombre]');
const mensaje = document.querySelector('[data-mensaje]');

const test = {
    campoNombre: false,
    campoMensaje: false
};

const mensajes = {
    limpiar: '',
    campoVacio: ['Completa el campo nombre', 'Completa el campo mensaje'],
    expresionInvalida: 'Solo letras mayúsculas, minúsculas y espacios. Maximo 40 carácteres',
    envioExitoso: 'Su mensaje ha sido enviado con éxito',
    formularioIncompleto: 'Diligencie el formulario completamente',
}

/*Funciones secundarias */
function addClass(elemento, clase) {
    elemento.classList.add(clase);
}

function removeClass(elemento, clase) {
    elemento.classList.remove(clase);
}

function visualizarMensaje(elemento, texto) {
    elemento.innerHTML = texto;
}


/*Funciones principales */
const validarNombre = (valor) => {

    const error = document.querySelector('[data-input-error]');
    visualizarMensaje(error, mensajes.limpiar);

    const formulario = document.querySelector('[data-formulario]');
    const clase = 'contacto__formulario-error-input';

    if (valor.validity.valueMissing) {
        addClass(formulario, clase);
        visualizarMensaje(error, mensajes.campoVacio[0]);
    }
    else if (valor.validity.patternMismatch) {
        addClass(formulario, clase);
        visualizarMensaje(error, mensajes.expresionInvalida);
    }
    else {
        visualizarMensaje(error, mensajes.limpiar);
        removeClass(formulario, clase);
        test.campoNombre = true;     
    }
    
}

const validarMensaje = (valor) => {
    const error = document.querySelector('[data-mensaje-error]');
    visualizarMensaje(error, mensajes.limpiar);

    const formulario = document.querySelector('[data-formulario]');
    const clase = 'contacto__formulario-error-mensaje';

    if (valor.validity.valueMissing) {
        addClass(formulario, clase); 
        visualizarMensaje(error, mensajes.campoVacio[1]);
    }
    else {
        visualizarMensaje(error, mensajes.limpiar);
        removeClass(formulario, clase);
        test.campoMensaje = true;
    }
    
}

const mostrarMensajesDeValidacion = () => {
    
    const mensaje = document.querySelector('[data-incompleto]');
    visualizarMensaje(mensaje, mensajes.limpiar);

    const formulario = document.querySelector('[data-formulario]');
    const clase = 'formulario__completo';

    if (test.campoNombre && test.campoMensaje) {

        formulario.classList.remove('contacto__formulario-error-incompleto', 'contacto__formulario-error-input', 'contacto__formulario-error-mensaje');
        addClass(mensaje, clase);
        visualizarMensaje(mensaje, mensajes.envioExitoso);

        setTimeout( () => {
            removeClass(mensaje, clase);
        }, 5000);

        test.campoNombre = false;
        test.campoNombre = false;
        formulario.reset();
    }
    else {
        formulario.classList.add('contacto__formulario-error-incompleto', 'contacto__formulario-error-input', 'contacto__formulario-error-mensaje');
        visualizarMensaje(mensaje, mensajes.formularioIncompleto);        
    }
}

/*Detección de eventos en los campos del formulario*/
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


















