const express = require("express");
const router = express.Router();
const {cadastrar, login} = require('../Functions/Coordenador')
router.post('/login', login);
router.post('/cadastrar', cadastrar );
// router.put('/atualizar');
// router.delete('/desativar');


module.exports = router;
