//imports
const express = require('express');
const mongoose = require('mongoose');

    // inicia o app
    const app = express();

    //iniciando o database
    mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true,  useNewUrlParser: true });

    //rotas
    app.get('/', (rec, res) => {
        res.send('Hello world');
    });

    //escolhendo a porta a ser ouvida
    app.listen(3001);