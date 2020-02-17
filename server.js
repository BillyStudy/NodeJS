//imports
const express = require('express');
const mongoose = require('mongoose');
const requiredir = require('require-dir');

    // inicia o app
    const app = express();

    //iniciando o database
    mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true,  useNewUrlParser: true });
    requiredir('./src/models')

    const Product = mongoose.model('Product');
    //rotas
    app.get('/', (rec, res) => {
        Product.create({title:"Google", description:"Site de pesquisas", url:"google.com"})
        return res.send('Hello world');
    });

    //escolhendo a porta a ser ouvida
    app.listen(3001);