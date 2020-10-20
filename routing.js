// ROUTING FUNCTIONS

// send home page
module.exports.homePage = function(request, response){
    response.sendFile(__dirname + "/index.html");
}

// send results page
module.exports.resultsPage = function(request, response){
    response.sendFile(__dirname + "/public/results.html");
}