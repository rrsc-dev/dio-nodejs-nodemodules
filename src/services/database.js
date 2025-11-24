// Exportação padrão, as função já são exportadas por padrão
exports.connectToDatabase = (databaseName) => {
    console.log("Conectando ao banco: " + databaseName);
}

exports.disconnectDatabase = () => {
    console.log("Desconectando");
}