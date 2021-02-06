var router = require("express").Router();
var app = express();

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.post("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.delete("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("/api/characters", function(req, res) {
    return res.json(characters);
});