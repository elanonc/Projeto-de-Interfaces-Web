const express = require("express");
const routesAluno = require("../app/route/alunos.route");
const routesPosts = require("../app/route/posts.route");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    routesPosts(app);
    routesAluno(app);
    app.use(express.static("./public"))
    return app;
}