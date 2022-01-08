const { response } = require("express");
const { connection } = require("../Database/Connection");

exports.getAll = async (_, res) => {
  connection.connect((err) => {
    const result = connection.query(
      "SELECT * FROM questoes",
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    // console.log(12, result);
  });
}

exports.findEdicao = async (req, res) => {
  const { edicao } = req.body;
  connection.connect((err) => {
    if (err) throw err;
    const result = connection.query(
      `SELECT * FROM questoes WHERE edicao = '${edicao}'`,
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    console.log(result);
  });
};

exports.findDisciplina = async (req, res) => {
  const { disciplina } = req.body;
  connection.connect((err) => {
    if (err) throw err;
    const result = connection.query(
      `SELECT * FROM questoes WHERE disciplina = '${disciplina}'`,
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    console.log(result);
  });

};

exports.findDificuldade = async (req, res) => {
  const { dificuldade } = req.body;
  connection.connect((err) => {
    if (err) throw err;
    const result = connection.query(
      `SELECT * FROM questoes WHERE dificuldade = '${dificuldade}'`,
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    console.log(result);
  });

};

exports.findCurso = async (req, res) => {
  const { curso } = req.body;
  connection.connect((err) => {
    if (err) throw err;
    const result = connection.query(
      `SELECT * FROM questoes WHERE curso = '${curso}'`,
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    console.log(result);
  });

};

exports.findtipoQuestao = async (req, res) => {
  const { tipoQuestao } = req.body;
  connection.connect((err) => {
    if (err) throw err;
    const result = connection.query(
      `SELECT * FROM questoes WHERE tipo_questao = '${tipoQuestao}'`,
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    console.log(result);
  });
};

exports.newQuetions = async (req, res) => {
  const {
    numero,
    curso,
    disciplina,
    enunciado,
    tipo_questao,
    alternativas,
    alternativaCorreta,
    dissertativas,
    dificuldade,
    edicao,
  } = req.body;
  const IDQuestoes = 0

  connection.connect((err) => {
    if (err) throw err;
    const resultado = connection.query(
      `INSERT INTO questoes (IDQuestoes, numero, curso, disciplina, enunciado, tipo_questao, alternativas, alternativaCorreta, dissertativas, dificuldade, edicao)
        VALUES ('${IDQuestoes}','${numero}','${curso}','${disciplina}','${enunciado}','${tipo_questao}','${alternativas}','${alternativaCorreta}','${dissertativas}','${dificuldade}','${edicao}')`,
        (err, results) => {
          if (err){
            res.status(500).json({ error })
            return;
          }

          const response = results;
          return res.status(200).json(response);
        })
    console.log(resultado);
  });
};

exports.deleteQuestion = async (req, res) => {
  const { IDQuestoes } = req.body;
  connection.connect((err) => {
    if (err) throw err;
    const resultado = connection.query(
      `DELETE FROM questoes WHERE IDQuestoes = ${IDQuestoes}`,
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    console.log(resultado);
  });

};

exports.alterarQuestao = async (req, res) => {
  const {
    IDQuestoes,
    numero,
    curso,
    disciplina,
    enunciado,
    tipo_questao,
    alternativas,
    alternativaCorreta,
    dissertativas,
    dificuldade,
    edicao,
  } = req.body;

  connection.connect((err) => {
    if (err) throw err;
    const result = connection.query(
      `UPDATE questoes SET numero="${numero}", curso="${curso}", disciplina="${disciplina}", enunciado="${enunciado}", tipo_questao="${tipo_questao}", alternativas= "${alternativas}", alternativaCorreta="${alternativaCorreta}", dissertativas="${dissertativas}", dificuldade='${dificuldade}', edicao='${edicao}' WHERE IDQuestoes="${IDQuestoes}"`,
      (err, results) => {
        if (err) {
          // console.log(results);
        }
        const response = results;
        return res.status(200).json(response);
      })
    console.log(result);
  });

};
