/**
 * MAIN FUNCTIONS THAT RUN SERVER PROCESSES
 */
//require dependencies
require("dotenv").config();
const axios = require("axios");
// end of requiring dependencies

// variable declarations
const params = {
    access_key: process.env.SERPSTACK_API_KEY,
    query: "mcdonalds"
}


// search results
// axios.get("https://api.serpstack.com/search", {params})
//     .then(function(response){
//         console.log(response.data);
//         }).catch(function(error){
//             console.log("There was an error");
//         });