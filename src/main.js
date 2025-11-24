// Faz a importação das funções em outros arquivos
const p = require("./services/products"); // Recebe tudo que é exportável dentro do arquivo products
const config = require("./services/config");

async function main() {
    // console.log('Executando');
    // console.log(p.getFullName("123", "Produto"))

    console.log(config.production);
}

main();