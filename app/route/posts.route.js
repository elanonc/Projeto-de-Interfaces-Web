const controller = require("../controller/posts.controller");

module.exports = (app) => {
    app.post("/posts", controller.fazerPosts);
    app.get("/posts", controller.listarPosts);
};