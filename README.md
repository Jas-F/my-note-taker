# Note Tacker
Create an application that can be used to write, save, and delete notes.

===========
![Image](note.gif)

<br>

## Save Notes

```
app.post("/api/notes", (req, res) => {
    return res.json(note)
});
```
<br>

## Delete Notes

```
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
```
<br>

## Get Notes From Server

```
// route to notes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

```

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Heroku](https://dashboard.heroku.com/apps)

## Deployed Link

## References 

*https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

* [See Live Site](https://my-note-tracker.herokuapp.com/)

## License

This project is licensed under the MIT License 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Prerequisites

Git hub,
Git lab,
Git bash,
Visual studio,
Google chrome,
Bootstrap,
JavaScript
## Authors

**Jasmine Franklin C: 301-332-2313 E: jasminer.franklin@gmail** 

- [Link to Portfolio Site](https://jas-f.github.io/updated-portfolio/)
- [Link to Github](https://github.com/Jas-F/my-note-taker)
- [Link to LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121)

<p>&copy; UC Berkeley Extension Bootcamp.</p>
