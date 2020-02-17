//imports
const express = require('express');

    // inicia o servidor
    const app = express();

    //rotas
    app.get('/', (rec, res) => {
        res.send('Hello world');
    });

    //escolhendo a porta a ser ouvida
    app.listen(3001);