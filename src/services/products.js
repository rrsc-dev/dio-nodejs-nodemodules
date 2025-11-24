// Funções que lidam com produtos
async function getFullName(codeId, productName) {
    return codeId + "--" + productName;
}

// Define o que deve ser exportado desse arquivo
module.exports = {
    getFullName
}