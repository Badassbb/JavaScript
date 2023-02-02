document.addEventListener('DOMContentLoaded', () => {
const cartesArray = [
    {
        name: 'Pikachu',
        img: './img/pikachu.webp'
    },
    {
        name: 'Luvers',
        img: './img/Luvers.png'
    },
    {
        name: 'Roodoudou',
        img: './img/Roodoudou.webp'
    },
    {
        name: 'Teddiursa',
        img: './img/Teddiursa.png'
    },
    {
        name: 'Fidough',
        img: './img/Fidough.webp'
    },
    {
        name: 'Diglett',
        img: './img/diglett.png'
    },
    {
        name: 'Pikachu',
        img: './img/pikachu.webp'
    },
    {
        name: 'Luvers',
        img: './img/Luvers.png'
    },
    {
        name: 'Roodoudou',
        img: './img/Roodoudou.webp'
    },
    {
        name: 'Teddiursa',
        img: './img/Teddiursa.png'
    },
    {
        name: 'Fidough',
        img: './img/Fidough.webp'
    },
    {
        name: 'Diglett',
        img: './img/diglett.png'
    }
];

cartesArray.sort(() => 0.5 - Math.random());

const grilleAffichage = document.querySelector('#grille');
const resultAffichage = document.querySelector('#result');
let carteChoisi = [];
let carteChoisiId = [];
const cartesGagnées = [];

function CreationPlateau () {
    for (let i = 0; i < cartesArray.length; i++){
        const cartes = document.createElement('img');
        cartes.setAttribute('src', './img/pokemon_back.jpg');
        cartes.setAttribute('data-id', i);
        cartes.addEventListener('click', cartesAction);
        grilleAffichage.appendChild(cartes);
    }
}

function checkForMatch() {
   const carte = document.querySelectorAll('img');
   const optionUnId = carteChoisiId[0];
   const optionDeuxId = carteChoisiId[1];

    if(optionUnId == optionDeuxId){
        carte[optionUnId[0]].setAttribute('src', './img/pokemon_back.jpg');
        carte[optionDeuxId[1]].setAttribute('src', './img/pokemon_back.jpg');
        alert('Vous avez cliqué sur la même image !');
    }

   if (carteChoisi[0] === carteChoisi[1]){
    alert ('bravo, tu as trouvé une correspondance !');
    carte[optionUnId].setAttribute('src', './img/White.webp');
    carte[optionDeuxId].setAttribute('src', './img/White.webp');
    carte[optionUnId].removeEventListener('click', cartesAction);
    carte[optionDeuxId].removeEventListener('click', cartesAction);
    cartesGagnées.push(carteChoisi);

}else{
    carte[optionUnId].setAttribute('src', './images/pokemon_back.jpg');
    carte[optionDeuxId].setAttribute('src', './images/pokemon_back.jpg');
    alert ('Désolé, essaies encore !');
}
carteChoisi = [];
carteChoisiId = [];
resultAffichage.TextContent = cartesGagnées.length;
if(cartesGagnées.length === cartesArray.length/2){
    resultAffichage.textContent = ('Félicitation, tu as réussi à trouver toutes les combinaisons!');
}
}


function cartesAction() {
    let carteId = this.getAttribute('data-id');
    carteChoisi.push(cartesArray[carteId].name);
    carteChoisiId.push(carteId);
    this.setAttribute('src', cartesArray[carteId].img);

    if (carteChoisi.length === 2) {
        setTimeout(checkForMatch, 500);
    }

    CreationPlateau();
}
});
