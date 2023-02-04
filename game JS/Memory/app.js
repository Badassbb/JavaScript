const cartesArray = [
    {
        name: 'pikachu',
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
        name: 'diglett',
        img: './img/diglett.png'
    },
    {
        name: 'pikachu',
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
        name: 'diglett',
        img: './img/diglett.png'
    }
];

cartesArray.sort(() => 0.5 - Math.random());
let recup = document.querySelector('#name');
const grilleAffichage = document.querySelector('#grille');
const resultAffichage = document.querySelector('#result');
let carteChoisi = [];
let carteChoisiId = [];
const cartesGagnees = [];

function CreationPlateau () {
    for (let i = 0; i < cartesArray.length; i++){
        const cartes = document.createElement('img');
        cartes.setAttribute('src', './img/pokemon_back.jpg');
        cartes.setAttribute('data-id', i);
        cartes.addEventListener('click', cartesAction);
        grilleAffichage.appendChild(cartes);
    }
}

function checkMatch() {
   const cartes = document.querySelectorAll('img')
   const optionUnId = carteChoisiId[0];
   const optionDeuxId = carteChoisiId[1];

    if(optionUnId == optionDeuxId){
        cartes[optionUnId].setAttribute('src', './img/pokemon_back.jpg');
        cartes[optionDeuxId].setAttribute('src', './img/pokemon_back.jpg');
        alert('Vous avez cliqué sur la même image !');
    }
     else if (carteChoisi[0] === carteChoisi[1]){
    alert ('bravo, tu as trouvé une correspondance !');
    cartes[optionUnId].setAttribute('src', './img/white.webp');
    cartes[optionDeuxId].setAttribute('src', './img/white.webp');

   cartes[optionUnId].removeEventListener('click', cartesAction);
   cartes[optionDeuxId].removeEventListener('click', cartesAction);
    cartesGagnees.push(carteChoisi);

}else{
    cartes[optionUnId].setAttribute('src', './img/pokemon_back.jpg');
    cartes[optionDeuxId].setAttribute('src', './img/pokemon_back.jpg');
    alert ('Désolé, essaies encore !');
}
resultAffichage.TextContent = cartesGagnees.length;
carteChoisi = [];
carteChoisiId = [];
if(cartesGagnees.length === cartesArray.length/2){
    resultAffichage.textContent = 'Félicitation, tu as réussi à trouver toutes les combinaisons!';
}

}

function cartesAction() {
// console.log(cartesArray);
    const carteId = this.getAttribute('data-id');
    carteChoisi.push(cartesArray[carteId].name);
    carteChoisiId.push(carteId);
// console.log(carteChoisi);
// console.log(carteChoisiId);
// console.log('clicked', carteId);

    this.setAttribute('src', cartesArray[carteId].img);
    if (carteChoisi.length === 2) {
        setTimeout(checkMatch,500);
    }
    recup.textContent = (cartesArray[carteId].name);
}
CreationPlateau();