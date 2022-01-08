const {connection} = require('../Database/Connection');

exports.getCursos = async (_, res) => {
    connection.connect(function (err){
        if (err) throw err;
        const resultado = connection.query("SELECT * FROM cursos ORDER BY Nome",  
        (err, results) => {
          if (err) {
            // console.log(results);
          }
          const response = results;
          return res.status(200).json(response);
        })
  });
};

exports.newCurso = async (req, res) => {
    const {nome, sigla} = req.body;
    const IDCurso = 0
    connection.connect(function (err){
        if (err) throw err;

    const result = connection.query(`INSERT INTO cursos (IDCurso, nome, sigla) VALUES("${IDCurso}","${nome}","${sigla}")`, 
    (err, results) => {
      if (err) {
        // console.log(results);
      }
      const response = results;
      return res.status(200).json(response);
    })
    console.log(result)
  });
};

exports.deleteCurso = async (req, res) => {
  const { IDCurso } = req.body;
  connection.connect(function (err) {
    if (err) throw err;
    const result = connection.query(
      `DELETE FROM cursos WHERE IDCurso = '${IDCurso}'`,
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

exports.alterarCurso = async (req, res) => {
  const { IDCurso, nome, sigla } = req.body;

  const resultado = connection.connect((err) => {
         if (err) throw err;
         const result = connection.query(`UPDATE cursos SET Nome = "${nome}", sigla = "${sigla}" WHERE IDCurso = "${IDCurso}"`,
          (err, results) => {
          if (err) {
            // console.log(results);
          }
          const response = results;
          return res.status(200).json(response);
        })
         console.log(result);
  })
}
