
function intervalClock() {
    let accurateDate = new Date();
    document.getElementById('klokke').innerHTML = accurateDate.toLocaleTimeString();
}

setInterval(intervalClock, 1000);


