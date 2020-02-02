// Escreva uma função que te faça comprar celulares enquanto você tiver dinheiro no banco (saldo); (loops)

let saldo = 5000;
let precoCelular = 1000;

function compraCelular() {
    let celularesComprados = 0;

    while (saldo >= precoCelular) {
        saldo -= precoCelular;
        celularesComprados++;
    }
    return celularesComprados;
}
console.log("celulares comprados: " + compraCelular());