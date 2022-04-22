const inputEmail = document.querySelector('[data-correo]');
const inputPassword = document.querySelector('[data-password]');

const botonEntrar = document.querySelector('[data-entrar]');   
botonEntrar.setAttribute('disabled', true);

export const habilitarBotonEntrar = (evento) => {
    evento.preventDefault();

    const validarEmail = inputEmail.validity.valid;
    const validarPassword = inputPassword.validity.valid;
    const validacionInputs = (validarEmail && validarPassword);
    console.log(validacionInputs);

    validacionInputs 
    ? botonEntrar.removeAttribute('disabled') 
    : botonEntrar.setAttribute('disabled', true)

}

export const loginUsuario = () => {

    const correoAdmin = 'henry@alura.com';
    const passwordAdmin = 'Admingeek1';
    
    if ( (inputEmail.value === correoAdmin) && (inputPassword.value === passwordAdmin) ) {
        console.log('Inicio de sesión');
        window.location.href = "/todosLosProductos.html";
    }
    else {
        console.log('clave o correo invalido');
    }

}










