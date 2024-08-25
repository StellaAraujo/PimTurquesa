// database.js
const mongoose = require('mongoose');
const URI = 'mongodb+srv://salaoUser:pimturquesa@clusterdev.okfcpot.mongodb.net/salao-na-mao?retryWrites=true&w=majority&appName=ClusterDev';

mongoose
    .connect(URI)
    .then(() => console.log('DB is Up!'))
    .catch((err) => console.log('Erro ao conectar ao banco de dados:', err));

