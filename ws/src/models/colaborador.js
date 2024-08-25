const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador  = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome obrigatorio']
    },
    telefone: {
        type: String,
        required: [true, 'Telfone obrigatorio']
    },
    email: {
        type: String,
        required: [true, 'Email obrigatorio']
    },
    senha: {
        type: String,
        required: [true, 'Senha obrigatorio']
    },
    foto: {
        type: String,
        required: [true, 'Foto obrigatorio']
    },
    dataNascimento: {
        type: String,
        required: [true, 'Data de Nascimento obrigatorio']
    },
    sexo: {
        type: String,
        enum: ['M','F'],
        required: [true, 'Sexo obrigatorio']
    },
    status: {
        type: String,
        enum: ['A','I'],
        required: [true, 'Status obrigatorio'],
        default: 'A'
    },
    ContaBancaria:{
        titular:{
            type: String,
            required: true
        },
        cpfCnpj:{
            type: String,
            required: true
        },
        banco:{
            type: String,
            required: true
        },
        tipo:{
            type: String,
            required: true
        },
        agencia:{
            type: String,
            required: true
        },
        numero:{
            type: String,
            required: true
        },
        dv:{
            type: String,
            required: true
        },
    },
    recipientId:{
        type: String,
        required: true     
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('colaborador', colaborador);