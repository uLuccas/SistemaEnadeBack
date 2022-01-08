const { connection } = require('../Database/Connection');

exports.getDisciplinas = async (_, res) => {
    connection.connect(function (err) {
        if (err) throw err;
        const resultado = connection.query("SELECT * FROM disciplinas ORDER BY nome", (err, results) => {
            if (err) {
              // console.log(results);
            }
            const response = results;
            return res.status(200).json(response);
          })
    })
}

exports.newDisciplinas = async (req, res) => {
    const { nome, sigla, siglaCursos } = req.body;
    const iDDisciplinas = 0
    const result = connection.connect(function (err) {
        if (err) throw err;

        connection.query(`INSERT INTO disciplinas (IDDisciplinas, nome, sigla, siglaCursos) VALUES("${iDDisciplinas}","${nome}","${sigla}","${siglaCursos}")`,
        (err, results) => {
            if (err) {
              // console.log(results);
            }
            const response = results;
            return res.status(200).json(response);
          })
    })
}

exports.deleteDisciplinas = async (req, res) => {
    const { iDDisciplinas } = req.body;
    connection.connect(function (err) {
        if (err) throw err
        const result = connection.query(`DELETE FROM disciplinas WHERE iDDisciplinas = '${iDDisciplinas}'`,
        (err, results) => {
            if (err) {
              // console.log(results);
            }
            const response = results;
            return res.status(200).json(response);
        })
        console.log(result)
    })
}

exports.alterarDisciplinas = async (req, res) => {
    const { iDDisciplinas, nome, sigla, siglaCursos } = req.body;
    connection.connect((err) => {
        if (err) throw err;
        connection.query(`UPDATE disciplinas SET Nome = "${nome}", sigla = "${sigla}", siglaCursos= "${siglaCursos}" WHERE iDDisciplinas = "${iDDisciplinas}"`, 
        (err, results) => {
            if (err) {
              // console.log(results);
            }
            const response = results;
            return res.status(200).json(response);
          })
    })
    console.log(res)
}