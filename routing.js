// ROUTING FUNCTIONS

// require express and initialize view engine
const express = require("express");
const app = express();
app.set("view engine", "ejs");

// send home page
module.exports.homePage = function(request, response){
    response.sendFile(__dirname + "/index.html");
}
// initial search page
module.exports.initialSearch = function(request, response){
    response.render("initial-search");
}

// send results page
module.exports.searchPage = function(request, response){
    response.render("results");
}

module.exports.resultsPage = function(request, response){
    response.redirect("/serp");
}