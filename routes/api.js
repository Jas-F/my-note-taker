var router = require("express").Router();
var app = express();
var note = "/"

// create path for routes
app.get("/api/notes", (req, res) => {
    res.getNotes()
});

// create path for saving notes
app.post("/api/notes", (req, res) => {
    res.saveNote(note)
});

// create path for deleting notes
app.delete("/notes", (req, res) => {
    res.deleteNote(id)
});

// export routes
module.exports=router