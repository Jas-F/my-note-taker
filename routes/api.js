var router = require("express").Router();
var app = express();
var note = "/"

// create path for routes
app.get("/api/notes", (req, res) => {
   return res.json()
});

// create path for saving notes
app.post("/api/notes", (req, res) => {
    return res.json(note)
});

// create path for deleting notes
app.delete("/notes", (req, res) => {
    return res.json(id)
});

// export routes
module.exports=router