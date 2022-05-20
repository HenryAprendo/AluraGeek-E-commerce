export const activarDesactivarBoton = (boton, esValido, clase) => {
    if (esValido) {
        boton.removeAttribute('disabled');
        boton.classList.add(clase);       
        // activarBoton(botonAgregar, clase);
    } 
    else {
        boton.setAttribute('disabled', true);
        boton.classList.remove(clase);
        // desactivarBoton(botonAgregar, clase);
    }
}