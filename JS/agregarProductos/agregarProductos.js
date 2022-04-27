const inputFile = document.querySelector('[data-file]');
const box = document.querySelector('[data-box]');

const selecionar = (e) => {
    let archivos = e.target.files ;   
    let miArchivo = archivos[0];

    const reader = new FileReader();
    reader.onload = () => {
        
        box.innerHTML = `<img src="${reader.result}" height="150px" object-fit: cover >`
        // const img = new Image()
        // img.src = reader.result;
        // document.body.appendChild(img);
    }

    reader.readAsDataURL(miArchivo);
};

inputFile.addEventListener('change', selecionar);



































