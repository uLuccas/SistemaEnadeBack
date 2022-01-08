const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "enade_unicid",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Conexao realizada com sucesso!");
});

module.exports = { connection };
