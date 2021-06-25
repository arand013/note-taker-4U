var path = require("path");
var dbInfo = require("../db/db.json");

module.exports = (app) => {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/api/notes", function (req, res) {
        res.json(dbInfo);
    });

    app.post("/api/notes", function (req, res) {
        dbInfo.push(req.body);
        res.json(dbInfo);
    });


    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });



};