# Note Tacker
Create an application that can be used to write, save, and delete notes.

===========
![Image](doc.png)

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
app.delete("/notes", (req, res) => {
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

* [See Live Site]()

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
