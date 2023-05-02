/* CAROSELLO */
// INIZIO CODICE

// creo array con le img

const arrImg = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// seleziono il div che conterra le img
const containerPhoto = document.querySelector(`.photo`);
const containerMiniature = document.querySelector(`.miniature`);

// inserisco le img
for (i = 0; i < arrImg.length; i++) {
    containerPhoto.innerHTML += `<img src="${arrImg[i].image}" class="${i == 0 ? `active` : ``}">`
    containerMiniature.innerHTML += `<img src="${arrImg[i].image}" class="${i == 0 ? `active` : ``}">`
}

// seleziono le img in un array
const img = document.querySelectorAll(`.photo img`);
console.log(img);

// EVENTO PER I BUTTON
// seleziono miniature
const miniature = document.querySelectorAll(`.miniature img`);

// seleziono i bottoni
const btnUp = document.querySelector(`.btn-up`);
const btnDown = document.querySelector(`.btn-down`);

// definisco variabile che rappresenta la prima img attiva
let active = 0;

// funzione button UP
btnUp.addEventListener(`click`, 
    function() {
        // rimuovo active dall'img corrente
        img[active].classList.remove(`active`);
        miniature[active].classList.remove(`active`);
        // setto nuovo valore di active
        active--;
        if (active < 0) {
            active = img.length - 1;
        }
        // aggiungo active alla prossima img
        img[active].classList.add(`active`);
        miniature[active].classList.add(`active`);
        
        }
)

// funzione button DOWN
btnDown.addEventListener(`click`, 
    function() {
    // rimuovo active dall'img corrente
    img[active].classList.remove(`active`);
    miniature[active].classList.remove(`active`);
    // setto nuovo valore di active
    active++;
    if (active >= img.length) {
        active = 0;
    }
    // aggiungo active alla prossima img
    img[active].classList.add(`active`);
    miniature[active].classList.add(`active`);
    
    }
)

// EVENTO CLICK SU MINIATURE
for (let i = 0; i < miniature.length; i++) {
    miniature[i].addEventListener(`click`, 
        function() {
            console.log(`click` + i)
            img[active].classList.remove(`active`);
            miniature[active].classList.remove(`active`);
            active = i;
            img[active].classList.add(`active`);
            miniature[active].classList.add(`active`);
        }
    )
}