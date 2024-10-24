// Far frem en pop-up varsel på skjermen
alert('Hallo, William her!');

// Skriver ut en melding til konsollen
console.log('Dette er en utskrift til console.log!');

// Spør etter brukeren sitt navn
let brukerNavn = prompt('Hei, hva heter du?');
console.log(brukerNavn);
document.getElementById('utskrift').innerText = 'Hei sann, ' + brukerNavn + '!'

let brukerHobby = prompt('Hva er du mest interessert i?')
document.getElementById('hobby').innerText = 'Så kult at du er interessert i ' + brukerHobby + '. Det hørest kult ut!'

let brukerFodselAar = prompt('Når var du født?')
console.log(brukerAlder)

let tid = new Date('');
let brukerAlder = tid.getFullYear() - brukerFodselAar
document.getElementById('alder').innerText = "Du er " + brukerAlder + " år gammel. Kult!"