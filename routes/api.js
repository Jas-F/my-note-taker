var router = require("express").Router();
var db = require("../db/db.json");
// requiring shortid npm package
const shortid = require('shortid');
//  requiring fs to write files
const fs = require("fs");
const { stringify } = require("querystring");

// create path for routes
router.get("/api/notes", (req, res) => {
    return res.json(db)
});

router.post("/api/notes", (req, res) => {
    console.log(req.body)
    // creating object for json file
    var notes = {
        id: shortid.generate(),
        title: req.body.title,
        text: req.body.text
    }
    console.log(notes)

    // push notes into db in order to display newly write note on the page
    db.push(notes)
    // rewrite db with new array
    // insert route to write file to db.json
    // stringify object
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) throw err;
        // send response to front end when working
        res.json(db)

    })
});


// create path for saving notes
// add npm package to create id's for notes

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
router.delete("/api/notes/:id", (req, res) => {
    // create an const to get notes id
    // delete note from array with filter method
    // code grabs id of clicked note then redefines database to equal everything that does not have the id of the clicked note
    const id = req.params.id
    
    db = db.filter(function(notes) {
        return notes.id !== id
    })

    console.log(req.params.id)
    return res.json(id)
});

// export routes
module.exports = router