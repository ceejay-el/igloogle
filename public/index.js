$("#results-search-form").submit(function (event){
    event.preventDefault();

    let query = $("#search").val();
    const apiRequest = process.env.SERPSTACK_API;
    const api_url = "http://api.serpstack.com/search?access_key=3ca0b573485e1b07e10019e27a0cb5e0&type=web&query=" + query;
    $.get(api_url, function(data){
        console.log(data);
    });
});