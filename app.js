const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")

const app = express()

// Conntect to Mongoose
mongoose.connect('mongodb://localhost/vidjot-dev')

// Load the model

require("./models/idea")
const Idea = mongoose.model('ideas')

// Middleware Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Index Route
app.get("/", function(req, res) {
    // this is where you will access datatabase data
    const title = "Welcome"
    res.render('index', {
        title: title
    })
})

// About Route
app.get("/about", function(req, res) {
    res.render("about")
})

// Add idea form
app.get("/ideas/add", function(req, res) {
    res.render("ideas/add")
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The jot-video Server Started...")
})