// Faz a importação das funções em outros arquivos
 
// const product = require("./services/products"); // Recebe tudo que é exportável dentro do arquivo products

const { getFullName, productType } = require("./services/products"); // Importa apenas o que está entre {} de dentro do móculo products
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log(database.connectToDatabase("BD"));
    getFullName("1", "Teclado");
}

main();