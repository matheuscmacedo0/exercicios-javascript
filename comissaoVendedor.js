// Escrever uma função que retorne o preço de um celular, com a comissão do vendedor(a);

function calculaComissao (valorProduto, porcentagemComissao) {
    return valorProduto += valorProduto * (porcentagemComissao/100);
}

console.log(calculaComissao(1000, 5));