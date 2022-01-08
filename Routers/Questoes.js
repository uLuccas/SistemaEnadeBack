const express = require("express");
const router = express.Router();
const { getAll, newQuetions, findEdicao, findDisciplina, findDificuldade,findCurso, findtipoQuestao, deleteQuestion, alterarQuestao} = require("../Functions/Questoes");

router.get('/', getAll);
router.post('/newQuestion', newQuetions);
router.post('/findEdicao', findEdicao);
router.post('/findDisciplina', findDisciplina);
router.post('/findDificuldade', findDificuldade);
router.post('/findCurso', findCurso);
router.post('/findTipo', findtipoQuestao);
router.delete('/deleteQuestion', deleteQuestion);
router.put('/alterarQuestao', alterarQuestao);

module.exports = router;
