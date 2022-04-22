const botonEntrar = document.querySelector('[data-entrar]');   
botonEntrar.setAttribute('disabled', true);

export const habilitarBotonEntrar = () => {

    const inputEmail = document.querySelector('[data-correo]');
    const inputPassword = document.querySelector('[data-password]');
    const validarEmail = inputEmail.validity.valid;
    const validarPassword = inputPassword.validity.valid;
    const validacionInputs = (validarEmail && validarPassword);

    validacionInputs 
    ? botonEntrar.removeAttribute('disabled') 
    : botonEntrar.setAttribute('disabled', true)

}