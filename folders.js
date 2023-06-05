let express = require('express');
let router = express.Router();

router.get('/produtos', (req, res) => {
    res.send("<h1>Página Produtos</h1><br/><p>Parágrafo</p>");
});

router.get('/sobre', (req, res) => {
    res.send("<h1>Página Sobre</h1><br/><p>Parágrafo</p>");
});

router.get('/contato', (req, res) => {
    res.send("<h1>Página Contato</h1><br/><p>Parágrafo</p>");
});

module.exports = router;