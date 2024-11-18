// Variablene som definerer hva de tre elementene er
let img_Stone = document.getElementById('Stone')
let img_Paper = document.getElementById('Paper')
let img_Scissors = document.getElementById('Scissors')

let userChose = "";

img_Stone.addEventListener('click', chosenStone);
img_Paper.addEventListener('click', chosenPaper);
img_Scissors.addEventListener('click', chosenScissors);


function chosenStone () {
    console.log('Du valgte stein!');
    userChose = 'Stone';
    gameResults();
}

function chosenPaper () {
    console.log('Du valgte papir!');
    userChose = 'Paper';
    gameResults();
}

function chosenScissors () {
    console.log('Du valgte saks!');
    userChose = 'Scissors';
    gameResults();
}

function gameResults () {
    let computerChoose = Math.floor(Math.random()*3);
    let chooseArray = ['Stone', 'Paper', 'Scissors']; 
    computerChoose = chooseArray[computerChoose];
    console.log('Datamaskinen valgte ' + computerChoose);

    let endResult = '';

    if (userChose == computerChoose) {
        console.log('Uavgjort');
    }

    else if (userChose == 'Stone' && computerChoose == 'Scissors') {
        console.log('Du vant!');
    }

    else if (userChose == 'Paper' && computerChoose == 'Stone') {
        console.log('Du vant!');
    }

    else if (userChose == 'Scissors' && computerChoose == 'Paper') {
        console.log('Du vant!');
    }

    else {
        console.log('Datamaskinen vant...uff!')
    }
}