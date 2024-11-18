let currentCookies = 0;
let totalCookies = 0;
let cookieImage = document.getElementById('cookieImage');


function cookieClick() {
    currentCookies++;
    console.log(currentCookies)
}

cookieImage.addEventListener('click', cookieClick)
