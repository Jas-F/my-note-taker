var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000

// server middleware pros
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// require both routes
var api = require("./routes/api")
var html = require("./routes/html")
// app.use(api)
app.use(html)

// add alert for successful port connection
app.listen(PORT,() => {
console.log("port complete")
});