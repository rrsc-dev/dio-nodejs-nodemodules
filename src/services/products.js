// Funções que lidam com produtos
const productType = {
    version: "digital",
    tax: "x1",
}

const apiURL = {
    url: 'www.google.com',
}

async function getFullName(codeId, productName) {
    console.log(codeId + "--" + productName);
    await doBreakLine();
}

async function getProductLabel(productName) {
    console.log("Produto: " + productName);
}

// Hidden function
async function doBreakLine() {
    console.log("\n");
}

// Define o que deve ser exportado desse arquivo, podem ser exportadas N funções
module.exports = {
    getFullName,
    getProductLabel,
    productType
}