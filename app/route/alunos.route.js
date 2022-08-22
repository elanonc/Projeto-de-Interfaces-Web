const controller = require("../controller/alunos.controller");

module.exports = function(app){
    app.get("/alunos", controller.listaAlunos);
    app.get("/alunos/:id", controller.obterAluno);
    app.post("/alunos", controller.cadastrarAluno);
}