const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// Middleware Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Index Route
app.get("/", function(req, res) {
    res.render('index')
})

// About Route

app.get("/about", function(req, res) {
    res.render("about")
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The jot-video Server Started...")
})