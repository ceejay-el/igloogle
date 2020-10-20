// formate local time
setInterval(function(){
    let timeOptions = {
        hour12: false,
        hour: "numeric",
        minute: "numeric"
    }
    let dateOptions = {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString("en", timeOptions);
    document.getElementById("date").innerHTML = date.toLocaleDateString("en-gb", dateOptions);
}, 1000);