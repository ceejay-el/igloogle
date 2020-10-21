<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 579a6a7d911bf75bbaf19b185aa0b58e98d6bd0c
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
        response.render("results", {SEresults: apiData});

        }).catch(function(error){
            console.log("There was an error");
});
<<<<<<< HEAD
=======
=======
// =============================================================================================================== //
>>>>>>> 579a6a7d911bf75bbaf19b185aa0b58e98d6bd0c
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
<<<<<<< HEAD

        }).catch(function(error){
            console.log("There was an error");
});
>>>>>>> 2eff32a... working engine
=======
        }).catch(function(error){
            console.log("There was an error");
        });
>>>>>>> 579a6a7d911bf75bbaf19b185aa0b58e98d6bd0c
}