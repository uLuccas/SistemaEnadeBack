const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })
const uploadUser = require('./middlewares/uploadImage');


app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

const questoes = require("./Routers/Questoes");
const Coordenador = require("./Routers/Coordenador");
const disciplina = require("./Routers/Disciplinas");
const curso = require("./Routers/Curso");


app.use("/api/questoes", questoes);
app.use("/api/coord", Coordenador);
app.use("/api/disciplina", disciplina);
app.use("/api/curso", curso);


app.post("/upload", uploadUser.single('file'), async (req, res) => {
  if (req.file) {
    console.log(req.file);
    return res.json({
      erro: false,
      mensagem: "Upload realizado com sucesso!"
    });
  }
  return res.status(400).json({
    erro: true,
    mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
  });
});


app.listen(1221, () => {
  console.log("Server running...");
});
