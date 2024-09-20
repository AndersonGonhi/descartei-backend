const mongoose = require('mongoose');

const PontoColetaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    numeroContato: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PontoColeta', PontoColetaSchema);
