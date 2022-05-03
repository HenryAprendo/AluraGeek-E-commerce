/*Código que carga la imagen desde un input file o arrastrandola */

const inputFile = document.querySelectorAll('.drop-zona__input');
inputFile.forEach( inputElement => {
    const zonaDropElemento = inputElement.closest('.zona__drog');

    /*Click sobre la zona de despliegue */
    zonaDropElemento.addEventListener('click', e => {
        inputElement.click();
    });

    inputElement.addEventListener('change', e => {
        previsualizarImagenEnZona (zonaDropElemento , inputElement.files[0]);
    });

    
    /*Sobre la zona de despliegue */
    zonaDropElemento.addEventListener('dragover', e => {
        e.preventDefault();
        console.log('Sobre la zona de despliegue');
        zonaDropElemento.classList.add('zona__drog--over');
    });

    /*Fuera de la zona de despliegue o fin de la operación de arrastre */
    const eventos = ['dragleave', 'dragend'];

    eventos.forEach( type => {
        zonaDropElemento.addEventListener(type, e => {
            e.preventDefault();
            zonaDropElemento.classList.remove('zona__drog--over');
        });
    });

    zonaDropElemento.addEventListener('drop', e => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            previsualizarImagenEnZona(zonaDropElemento, e.dataTransfer.files[0]);
        }

        zonaDropElemento.classList.remove('zona__drog--over');

    });


});


function previsualizarImagenEnZona(zonaDropElemento, file) {
    let zonaDropImagen = document.querySelector('.zona__drog__imagen');

    /*Remover el logo de la imagén y el texto de placeholder */

    if ( zonaDropElemento.querySelector('.zona__drog__prompt') ) {
        zonaDropElemento.querySelector('.zona__drog__prompt').remove();
    }
    

    /*Creando el elemento de despliegue de la imagen */

    if (!zonaDropImagen) {
        zonaDropImagen = document.createElement('div');
        zonaDropImagen.classList.add('zona__drog__imagen');
        zonaDropElemento.appendChild(zonaDropImagen);

    }


    /*Despliegue de la imagén */

    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result)
            zonaDropImagen.style.backgroundImage = `url('${reader.result}')`; 
        };
    }
    else {
        zonaDropImagen.style.backgroundImage = null;
    }


    /*Visualizando el nombre del producto */

    const nombreProducto = document.querySelector('.nombre__producto')
    nombreProducto.classList.add('zona__drop__nombre-producto');
    nombreProducto.innerHTML = '';
    nombreProducto.innerHTML = `Producto agregado: ${ file.name }`;

}













