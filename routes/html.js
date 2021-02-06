var router = require("express").Router();
var path = require("path");

// route to index
router.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "../public/index.html"));

});

// route to notes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})