/**
 # MAIN FUNCTIONS THAT RUN SERVER PROCESSES
 */
//require dependencies
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { request } = require("express");
// end of requiring dependencies



// variable declarations
const app = express();
// end of variable declarations


/**
 * initialize middleware
 */
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// end of initializing middleware





/**
 ### API SEARCH ENGINE RESULTS ======================================================================================= //
 * 
 * 
 */
module.exports.results = function(request, response){
    const params = {
        access_key: process.env.SERPSTACK_API_KEY,
        query: request.body.search
    }
    
    // load search results from api
    axios.get("http://api.serpstack.com/search", {params})
    .then(function(resp){
        let apiData = resp.data;

        if(!apiData || apiData.length === 0){
            response.render("results", {SEresults: false});
        } else {
            response.render("results", {SEresults: apiData});
        }
    }).catch(function(error){
        console.log("There was an error: ",  error);
});
}