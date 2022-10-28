//costum logic for different retail calculator modules

console.log("Hello World");

//display value selected on slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

function updateRateVp() {
    var ratevalVp = document.getElementById("rateVp").value;
    document.getElementById("rate_valVp").innerText=ratevalVp + "%";
}