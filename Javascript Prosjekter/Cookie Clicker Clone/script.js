// Første elementer av spillet
let currentCookies = 0;
let upgradeCounter = 0;
let multiplier = 1;
let autoValue = 0;

// Andre Elementer av spillet
let cookieImage = document.getElementById('theBigCookie');
let output = document.getElementById('cookieCount');
let upgradeList = document.getElementById('Upgrader');


cookieImage.addEventListener('click', cookieClick);

function cookieClick() {
    currentCookies = currentCookies + 1 * multiplier
    console.log(currentCookies);
    output.innerText = currentCookies;
}
function autoCookieClick () {
    currentCookies = currentCookies + 1;
    console.log(currentCookies);
}


// Oppgradinger
document.getElementById('UpgradeOne').addEventListener('click', firstUpgrade);
document.getElementById('UpgradeTwo').addEventListener('click', autoClicker);

function firstUpgrade () {
    if (currentCookies >= 10) {
        currentCookies -= currentCookies;
        multiplier += 1;
    }
    output.innerText = currentCookies;
}

function autoClicker () {
    if (currentCookies >= 15) {
        currentCookies -= currentCookies;
        autoValue = 1;
    }
    if (autoValue = 1) {
        setInterval (autoCookieClick, 1000);
    }
    output.innerText = currentCookies;
}