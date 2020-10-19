// display date and time on home page
// formate local time
const timeOptions = {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
}
const dateOptions = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric"
}
var date = new Date();
document.getElementById("time").innerHTML = date.toLocaleTimeString("en", timeOptions);
document.getElementById("date").innerHTML = date.toLocaleDateString("en-gb", dateOptions);