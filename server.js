/**
 * SERVER APPLICATION
 */
// require npm dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// end of requiring dependencies


// call local modules
const engines = require("./engines");
const routes = require("./routing")
// end of calling local modules

// variable assignments and declaration
const app = express();
const port = process.env.PORT || 3000;
// end of variable declarations

// initialize middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// end of initializing middleware



/**
 * ROUTING ================================================================================================ //
 */
// send landing page
app.get("/", routes.homePage);

// send search results
app.post("/", routes.resultsPage);
// ======================================================================================================= //

app.listen(port, function(){
    console.log("server listening on port " + port);
})