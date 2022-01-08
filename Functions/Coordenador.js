const { connection } = require("../Database/Connection");
const bcrypt = require("bcryptjs");
const { config } = require("dotenv");

exports.cadastrar = async (req, res) => {
  const { nome, usuario, senha, email } = req.body;

  if (!nome || !usuario || !email || !senha) {
    return res.status(500).json({ erro: "Existem campos não preenchidos" });
  }
  connection.query(
    `INSERT INTO coordenador (nome, usuario, senha, email) values ('${nome}', '${usuario}', '${bcrypt.hashSync(
      senha,
      bcrypt.genSaltSync(parseInt(process.env.ITERATIONS))
    )}', '${email}')`,
    (err, results) => {
      if (err) {
        res.send(err.toString());
        return;
      }
      console.log(results);
      return res.status(200).json({ message: "Usuario inserido com sucesso" });
    }
  );
};

exports.login = async (req, res) => {
  const { user, senha } = req.body;
  connection.query(
    `SELECT * FROM coordenador WHERE usuario = ? OR email = ?`,
    [user, user],
    (err, results) => {
      if (err) {
        res.send(err.toString());
        return;
      }
      console.log(results[0]);
      const response = results[0];
      if (!response) {
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
      const senhaValida = bcrypt.compareSync(senha, response.senha);
      console.log(senhaValida);
      if (!senhaValida) {
        return res.status(401).json({ status: "Senha inválida" });
      }
      response.senha = undefined;
      return res.status(200).json(response);
    }
  );
};
