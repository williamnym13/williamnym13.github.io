let currentCookies = 0;
let totalCookies = 0;
let cookieImage = document.getElementById('theBigCookie');
let output = document.getElementById('cookieCount');

cookieImage.addEventListener('click', cookieClick);

function cookieClick() {
    currentCookies++;
    console.log(currentCookies);
    output.innerText = currentCookies
}

function upgradeList() {
    
}

