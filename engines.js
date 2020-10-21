/**
 # MAIN FUNCTIONS THAT RUN SERVER PROCESSES
 */
//require dependencies
require("dotenv").config();
const express = require("express");
const axios = require("axios");
// end of requiring dependencies



// variable declarations
const app = express();
// end of variable declarations


/**
 * initialize middleware
 */
app.set("view engine", "ejs");
// end of initializing middleware





/**
 ### API SEARCH ENGINE RESULTS ======================================================================================= //
 * 
 * 
 */
// variable declarations
const params = {
    access_key: process.env.SERPSTACK_API_KEY,
    query: "mcdonalds"
}


module.exports.results = function(request, response){

    // load search results from api
    axios.get("http://api.serpstack.com/search", {params})
    .then(function(resp){
        let apiData = resp.data;
        response.render("results", {SEresults: apiData});

        }).catch(function(error){
            console.log("There was an error");
});
}