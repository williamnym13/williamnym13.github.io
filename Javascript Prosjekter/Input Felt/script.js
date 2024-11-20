let html_brukerNavn = document.getElementById('brukernavn');
let html_passord = document.getElementById('passord');
let html_farge = document.getElementById('farge');

let html_sendKnapp = document.getElementById('knappSend');

html_sendKnapp.addEventListener('click', sendInn);

function sendInn () {
    let brukernavn = html_brukerNavn.value;
    let passord = html_passord.value;
    let farge = html_farge.value;
    let loginValue = 0;

    console.log('Du trykte på knappen')

    console.log('Brukernavn: ' + brukernavn);
    console.log('Passord: ' + passord);
    console.log('Valg av farge: ' + farge);
}