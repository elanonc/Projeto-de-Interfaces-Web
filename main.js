const http = require("http");
const express_app = require("./config/express");

let app = express_app();
http.createServer(app).listen(app.get("port"), function() {
    console.log("Server is running on http://localhost:3000/");
});