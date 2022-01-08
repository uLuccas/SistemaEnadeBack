const express = require("express");
const router = express.Router();
const {getCursos, newCurso, deleteCurso, alterarCurso} = require("../Functions/Curso")

router.get('/', getCursos)
router.post('/newCurso', newCurso)
router.delete('/deleteCurso', deleteCurso)
router.put('/alterarCurso', alterarCurso)

module.exports = router;