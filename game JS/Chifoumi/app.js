const computerChoiceDisplay = document.getElementById('computer_choice');
const userChoiceDisplay = document.getElementById('user_choice');
const resultDisplay = document.getElementById('result');
const possiblesChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result;

possiblesChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 ) + 1//ou to autres choix possible.length
    
    if (randomNumber === 1) {
        computerChoice = "pierre";
    }
    
    if (randomNumber === 2) {
        computerChoice = "papier";
    }
    
    if (randomNumber === 1) {
        computerChoice = "ciseau";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = "C'est un match nul";
    }
    if(computerChoice === 'pierre' && userChoice === 'papier') {
        result = "Tu as gagné !";
    }
    if(computerChoice === 'pierre' && userChoice === 'ciseau') {
        result = "Tu as perdu !";
    }
    if(computerChoice === 'papier' && userChoice === 'ciseau') {
        result = "Tu as gagné !";
    }
    if(computerChoice === 'papier' && userChoice === 'pierre') {
        result = "Tu as perdu !";
    }
    if(computerChoice === 'ciseau' && userChoice === 'papier') {
        result = "Tu as perdu !";
    }
    
    resultDisplay.innerHTML = result;

}