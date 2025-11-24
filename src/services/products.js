// Funções que lidam com produtos
async function getFullName(codeId, productName) {
    return codeId + "--" + productName;
}

async function getProductLabel(productName) {
    console.log("Produto: " + productName);
}

// Define o que deve ser exportado desse arquivo, podem ser exportadas N funções
module.exports = {
    getFullName,
    getProductLabel
}