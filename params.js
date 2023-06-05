let express = require('express');
let router = express.Router();

router.get('/:p', (req, res) => {
    res.send("Parâmetro informado: "+ req.params.p);
});

router.get('/usuario/:u/nome/:n', (req, res) => {
    res.send("Informações do usuário: <b>"+ req.params.u +"</b>, nome: <b>"+ req.params.n+"</b>");
});

module.exports = router;