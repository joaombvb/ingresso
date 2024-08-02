function comprar() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let quantidadeDisponivelPista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeDisponivelInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let quantidadeDisponivelSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    verificarQuantidade();

    if (tipoIngresso === 'pista') {

        quantidadeDisponivelPista -= quantidade;

        quantidadeDisponivelPista >= 0 ? document.getElementById('qtd-pista').textContent = quantidadeDisponivelPista : alert('Quantidade indisponível para pista!');
    
    } else if (tipoIngresso === 'inferior') {

        quantidadeDisponivelInferior -= quantidade;

        quantidadeDisponivelInferior >= 0 ? document.getElementById('qtd-inferior').textContent = quantidadeDisponivelInferior : alert('Quantidade indisponível para cadeira inferior!'); 
         
    } else if (tipoIngresso === 'superior') {

        quantidadeDisponivelSuperior -= quantidade;

        quantidadeDisponivelSuperior >= 0 ? document.getElementById('qtd-superior').textContent = quantidadeDisponivelSuperior : alert('Quantidade indisponível para cadeira superior!');
    
    }   
}

function verificarQuantidade () {
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade <= 0) {
        alert('O campo de quantidade não foi preenchido corretamente, por favor, tente novamente!');
        return;
    }
}