const express  = require('express');
const app = express();

let port=3000;

app.get('/', (req, res) => {
    res.send("Seja bem vindo!");
});

let folders_module = require('./folders.js');
app.use('/', folders_module);

app.post('/post/teste_post', (req, res) => {
    res.send("Página acessada por método POST");
});

app.get('/json', (req, res) => {
    res.status(200).json({usuario: "fulano", id:123456});
});

app.get('/rota[0-9]', (req, res) => {
    res.send("Regex atende a uma rota válida");
});

let params_module = require('./params.js');
app.use('/', params_module);

app.get('*', (req, res) => {
    res.send("Link inválido: 404");
});

app.listen(port, () => console.log(`Escutando na porta ${port}`));