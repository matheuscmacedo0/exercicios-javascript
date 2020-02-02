// Escreva uma função que compre acessórios para o celular 
// se não passar o limite que você quer gastar; (condicional)

function compraAcessorios (limite) {
    let acessorios = [
        {
            nome: "capinha",
            preco: 30
        },
        {
            nome: "pelicula",
            preco: 20
        }
    ];

    let contadorLimite = 0;
    let carrinho = [];

    // Compra capinhas e peliculas enquanto estiver dentro do limite estipulado
    while (contadorLimite < limite) {
        carrinho.push(acessorios[0]);
        carrinho.push(acessorios[1]);
        contadorLimite += acessorios[0].preco;
        contadorLimite += acessorios[1].preco;
    }

    return carrinho;
}
console.log(compraAcessorios(200));