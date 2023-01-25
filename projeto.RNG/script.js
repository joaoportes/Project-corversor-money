const button = document.getElementById('button-generate');

const generate = () => {
    const numParagrafo = document.getElementById('num-paragrafo');
    const inputMin = parseInt( document.getElementById('input-min').value);
    const inputMax = parseInt( document.getElementById('input-max').value);
    
    numParagrafo.innerHTML = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;
    
    if(isNaN(numParagrafo.innerHTML)){
        numParagrafo.innerHTML = Math.floor(Math.random() * (100 - 1 + 1));
    }
    if(inputMin > inputMax){
        numParagrafo.innerHTML ='Valor inválido'
    }

}

button.addEventListener('click', generate)






