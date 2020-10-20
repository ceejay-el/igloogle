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
axios.get("https://127.0.0.1:3000/serp.php", {params})
    .then(function(response){
        const apiResponse = response.data;
        console.log("Total results: ", apiResponse.search_information.total_results);
        apiResponse.organic_results.map(function(result, number){
            console.log(`${number + 1}.${result.title}`);
        }).catch(function(error){
            console.log(error);
        });
    });