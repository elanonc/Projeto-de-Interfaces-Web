const express = require("express");
const routesAluno = require("../app/route/alunos.route");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    routesAluno(app);
    app.use(express.static("./public"))
    return app;
}