
// Définition d'un objet Carte
function Carte(nom, types, points) {
    this.nom = nom;
    this.types = types;
    this.points = points;
}

// Définition des constantes pour les couleurs et les valeurs des cartes
const types = ["Boss", "Coeur", "Carreau", "Trèfle,"];
const nom = ["Robert", "Mike", "Sans nom", "BOB", "Blackie"];
const points = ["500", "500", "300", "300", "300", ""];

// Fonction pour créer un paquet de cartes
function creerPaquetDeCartes() {
    const paquet = [];

    for (let i = 0; i < COULEURS.length; i++) {
        for (let j = 0; j < VALEURS.length; j++) {
            const carte = new Carte(VALEURS[j], COULEURS[i]);
            paquet.push(carte);
        }
    }

    return paquet;
}

// Fonction pour mélanger un paquet de cartes
function melangerPaquetDeCartes(paquet) {
    for (let i = paquet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [paquet[i], paquet[j]] = [paquet[j], paquet[i]];
    }

    return paquet;
}

// Créer un paquet de cartes et le mélanger
const paquetDeCartes = melangerPaquetDeCartes(creerPaquetDeCartes());

// Fonction pour distribuer les cartes à un nombre donné de joueurs
function distribuerCartes(paquet, nbJoueurs) {
    const mainDesJoueurs = [];

    for (let i = 0; i < nbJoueurs; i++) {
        mainDesJoueurs.push([]);
    }

    for (let i = 0; i < paquet.length; i++) {
        const joueur = i % nbJoueurs;
        mainDesJoueurs[joueur].push(paquet[i]);
    }

    return mainDesJoueurs;
}

// Distribuer les cartes à 4 joueurs
const mainDesJoueurs = distribuerCartes(paquetDeCartes, 4);

// Afficher la main de chaque joueur dans la console
for (let i = 0; i < mainDesJoueurs.length; i++) {
    console.log("Joueur " + (i + 1) + ":");
    for (let j = 0; j < mainDesJoueurs[i].length; j++) {
        const carte = mainDesJoueurs[i][j];
        console.log(carte.valeur + " de " + carte.couleur);
    }
    console.log("");
}