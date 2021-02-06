var router = require("express").Router();
var app = express();

app.get("/api/notes", (req, res) => {
    res.getNotes()
});

app.post("/api/notes", (req, res) => {
    res.saveNote(data)
});

app.delete("/notes", (req, res) => {
    res.deleteNote(id)
});

app.get("/api/characters", function(req, res) {
    return res.json(characters);
});