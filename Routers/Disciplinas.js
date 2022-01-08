const express = require("express");
const router = express.Router();
const {getDisciplinas, newDisciplinas, deleteDisciplinas, alterarDisciplinas} = require("../Functions/Disciplinas")

router.get('/', getDisciplinas)
router.post('/newDisciplina', newDisciplinas)
router.delete('/deleteDisciplina', deleteDisciplinas)
router.put('/alterarDisciplina', alterarDisciplinas)

module.exports = router;