var router = require("express").Router();
var db = require("../db/db.json")

// create path for routes
router.get("/api/notes", (req, res) => {
   return res.json()
});

// create path for saving notes
// app.post("/api/notes", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newNote = .;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newcharacter);
  
//     characters.push(newcharacter);
  
//     res.json(newcharacter);
//   });

// create path for deleting notes
router.delete("/notes", (req, res) => {
    return res.json(id)
});

// export routes
module.exports=router