let image = document.getElementById('photo');
let forwardButton = document.getElementById('for_btn');
let backButton = document.getElementById('back_btn');

image.src = "JS Bilder/stein_figurer.jpg";

let imageCarousel = [
    'stein_figurer.jpg',
    'hytte.JPG',
    'utsikt.JPG'
]

// image.src = 'JS Bilder/' + imageCarousel[0];

let activeImage = 0;
image.src = 'JS Bilder/' + imageCarousel[activeImage];

forwardButton.addEventListener('click', navigationForward)
backButton.addEventListener('click', navigationBackward)

function navigationForward() {
    console.log('Fremover knapp klikket');
    if (activeImage >= 2) {
        activeImage = 0;    
    } else {
        activeImage += 1;
    }
    image.src = 'JS Bilder/' + imageCarousel[activeImage];
}

function navigationBackward() {
    console.log('Bakover knapp klikket')
    if (activeImage <= 0) {
        activeImage = 2
    } else {
        activeImage -= 1;
    }
    image.src = 'JS Bilder/' + imageCarousel[activeImage];
}
