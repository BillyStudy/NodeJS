//imports
const express = require('express');
const mongoose = require('mongoose');
const requiredir = require('require-dir');

    // inicia o app
    const app = express();

    //iniciando o database
    mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true,  useNewUrlParser: true });
    requiredir('./src/models')

    //rotas
    app.use('/api', require('./src/routes'));

    //escolhendo a porta a ser ouvida
    app.listen(3001);