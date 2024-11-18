for (let i = 0; i < 11; i += 2) {
    console.log('Tallet' + i)
}

let listeNavn = ['Jo Bjarne', 'Jo Bjørnar', 'Jon Bjarte'];
console.log(listeNavn[0]);
console.log(listeNavn[1]);
console.log(listeNavn[2]);
for (let i = 0; i < 3; i += 1) {
    console.log(listeNavn[i]);
}

// Enkel Quiz
let listeSpørsmål = ['Hvem er den beste læreren?', 'Hva er det beste faget?'];
let listeSvar = ['Halvard', 'Programmering'];

for (let spmNr = 0; spmNr < listeSpørsmål.length; spmNr++) {
    console.log('Spørsmål:' + listeSpørsmål[spmNr]);
    let svar = prompt('Spørsmål: ' + listeSpørsmål[spmNr]);

    if (svar == listeSvar[spmNr]) {
        console.log('Riktig!');
        document.getElementById('correctAnswer').innerText = "Riktig!";
    }
    else {
        console.log('Sorry...');
        console.log('Riktig svar: ' + listeSvar[spmNr]);
        document.getElementById('wrongAnswer').innerText = "Sorry, det er feil...";
        document.getElementById('wrongAnswer2').innerText = "Riktig svar er " + listeSvar[spmNr];
    }
}