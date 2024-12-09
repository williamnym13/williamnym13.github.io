// Første elementer av spillet
let currentCookies = 0;
let upgradeCounter = 0;
let multiplier = 1;
let autoClickerAmount = 0;

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


// Oppgradinger
document.getElementById('UpgradeOne').addEventListener('click', firstUpgrade);
document.getElementById('UpgradeTwo').addEventListener('click', autoClicker);

function firstUpgrade () {
    if (currentCookies >= 10) {
        currentCookies -= currentCookies;
        multiplier += 1;
        console.log('Upgrade 1 Purchased!')
    }
    output.innerText = currentCookies;
}

function autoClicker () {
    if (currentCookies >= 20) {
        currentCookies -= currentCookies;
        autoClickerAmount += 1;
        document.getElementById('auto-clicker-count').innerText = "Currently owned: " + autoClickerAmount;
        console.log('Upgrade 2 Purchased!')
    }
    if (autoValue = 1) {
        setInterval (cookieClick, 1000);
    }
    output.innerText = currentCookies;
}
