//DECLARATION DES CONSTANTES ET VARIABLES
const body = document.getElementsByTagName("body")[0];
//body.style.backgroundImage = "url('assets/backgroundHitman.webp')";
//body.style.backgroundSize = "cover";

//------------------------Page d'acceuil------------------------------
const accueil = document.getElementById("accueil");
const title_Acceuil = document.getElementById("title_Accueil");
const welcome = document.getElementById("welcome");
const push_Key = document.getElementById("push_Key");
const s = document.getElementById("s");
const synopsis = document.getElementById("synopsis")
//--------------------------Board_Game--------------------------------

const boardgame = document.getElementById("boardgame");

const div_Board_Top = document.getElementById("div_Board_Top");
const div_Board_Left = document.getElementById("div_Board_Left");
const div_Board_Middle = document.getElementById("div_Board_Middle");
const div_Board_Right = document.getElementById("div_Board_Right");
const card_1 = document.getElementById("card_1");
const card_2 = document.getElementById("card_2");
const card_3 = document.getElementById("card_3");
const card_4 = document.getElementById("card_4");
const card_5 = document.getElementById("card_5");

let cardchoisis = [];
let cardchoisiId = [];


//--------------------------HIGH_SCORE-------------------------------

const highScore = document.getElementById("highScore");

//--------------------------TABLEAUX---------------------------------
const cards = [
    { id: "card_0", nom: "phillipe", src: "assets/Personnage/hitman le cobra 300x200.png" },
    { id: "card_1", nom: "roger", src: "assets/Personnage/roger.webp" },
    { id: "card_2", nom: "blackie", src: "assets/Personnage/blackie.webp" },
    { id: "card_3", nom: "sbire_inconnu", src: "assets/Personnage/bob.webp" },
    { id: "card_4", nom: "bob", src: "assets/Personnage/bob.webp" },
    { id: "card_5", nom: "mike", src: "assets/Personnage/Gweilo Mike Abbott.jpg" }
];

const son = [
    ["son_1", "assets/son/5e8b57b0a6cb8-hitman1low.mp3"],
    ["son_2", "assets/son/dark-mystery-trailer-taking-our-time-131566.mp3"],
    ["son_3", "assets/son/machin-gun-mg34-double-sound-effect-7-11005.mp3"]
];

const sonSynopsis = new Audio('assets/son/type-writingx2.mp3');
const sonStart = new Audio('assets/son/5e8b57b0a6cb8-hitman1low.mp3');

//--------------------------ANIMATION--------------------------------
function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


// application
var speed_h1 = 200; //variable de timing d'écriture 200ms
var speed_p = 50;//variable de timing d'écriture réglé à 20ms
var h1 = title_Acceuil;
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed_h1 + speed_p;

// type affect header
typeEffect(h1, speed_h1);


// type affect body
setTimeout(function () {
    p.style.display = "inline-block";
    typeEffect(p, speed_p);
}, delay);
//--------------------------PROGRAMME--------------------------------

//Function
function stopsound() {
    sonSynopsis.pause()
    sonSynopsis.currentTime = 0;
}

function start() {
    accueil.style.display = "none";
    boardgame.style.display = "block";
    highScore.style.display = "none";
    sonStart.play()
}


function JouerSon3() {
    // Créer une nouvelle instance de l'objet Audio avec le son 3
    const audio = new Audio(son[2][1]);
    card_1.addEventListener('click', () => {
        audio.play(); // Joue le son lorsque la carte 1 est cliquée
        audio.currentTime = 0;
    });
    card_2.addEventListener('click', () => {
        audio.play(); // Joue le son lorsque la carte 2 est cliquée
        audio.currentTime = 0;
    });
    card_3.addEventListener('click', () => {
        audio.play(); // Joue le son lorsque la carte 3 est cliquée
        audio.currentTime = 0;
    });
    card_4.addEventListener('click', () => {
        audio.play(); // Joue le son lorsque la carte 4 est cliquée
        audio.currentTime = 0;
    });
    card_5.addEventListener('click', () => {
        audio.play(); // Joue le son lorsque la carte 4 est cliquée
        audio.currentTime = 0;
    });
}

// récupérer la touche "s"
const sKey = document.querySelector('.s');

// ajouter un écouteur d'événements pour le clavier
document.addEventListener('keydown', (event) => {
    // vérifier si la touche "s" a été enfoncée
    if (event.key === 's') {
        // ajouter la classe "active" pour changer l'apparence de la touche
        sKey.classList.add('active');
        start();
        stopsound();
    }
});

// ajouter un écouteur d'événements pour la fin de l'appui sur la touche
document.addEventListener('keyup', (event) => {
    // vérifier si la touche "s" a été relâchée
    if (event.key === 's') {
        // supprimer la classe "active" pour revenir à l'apparence normale de la touche
        sKey.classList.remove('active');
    }
});

/*function cardAction(id) {
    const img = document.getElementById(cards[id][0]);
    img.src = perso[cards][1];
    img.className = "flip";
    JouerSon();

}*/

let phillipeCardIndex;

function initGame() {
    shuffleCards();
    phillipeCardIndex = Math.floor(Math.random() * 5); // Choix aléatoire de la carte de Phllipe
    for (let i = 0; i <= 5; i++) {
        document.getElementById(cards[i].id).src = "assets/Carte/Fond carte hitman le cobra noir et blanc.png";
        document.getElementById(cards[i].id).classList.remove("flip");
    }
}

function cardAction(id) {
    const img = document.getElementById(cards[id].id);
    img.src = cards[id].src;
    img.classList.add("flip");
    if (id === phillipeCardIndex) {
        alert("Bravo, vous avez trouvé Phllipe !");
        initGame();
    } else {
        checkSbireCard();
    }
}

let nombreSbireCards = 0;

function checkSbireCard() {
    nombreSbireCards++;
    if (nombreSbireCards === 3) {
        alert("Vous avez révélé 3 cartes de sbires, la partie est perdue...");
        initGame();
    }
}

function shuffleCards() {
    for (let i = 0; i < 5; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}


function quitterLaPartie() {
    boardgame.style.display = 'none';
    // Envoie une requête HTTP au serveur web et récupère sa réponse,
    // met à jour localement le DOM sans charger une nouvelle page.

    // Le mot-clé new crée une nouvelle instance de la classe XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    // on peut préciser le script ou une URL à la place
    xhttp.open("GET", "high_scores.php?demander_les_scores=1", true);
    xhttp.send();

    // Callback qui sera invoqué plus tard par Javascript 
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            highScore.style.display = 'block';

            //  alert ('200 OK chaîne reçue:' + this.responseText);
            // this fait référence à l'objet qui utilise ce terme, ici xhttp



            let lignes = this.responseText.split(`\n`);
            let monNouvelleIndex = -1;
            let maDate = new Date("d/m/Y H:i:s")


            for (n in lignes) {
                if (!lignes[n]) continue;
                const resultscores = lignes[n].split(";")
                if (score >= resultscores[1] && monNouvelleIndex == -1) {

                    monNouvelleIndex = n; break
                }

            }
            if (monNouvelleIndex != -1) {
                // alert("vous etes dans le top 5");
                //Je suis dans le top 5 donc je vais insérer dans le tableau mon nouveau score
                var d = new Date();
                var date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ` Times : ` + d.getHours() + ` : ` + d.getMinutes() + ` : ` + d.getSeconds();
                lignes.splice(monNouvelleIndex, 0, 'Badass;' + score + ';' + date);
                //On va aussi supprimer le dernier élément du tableau 
                lignes[4] = "";
                //On va regénérer le csv et l'envoyer au serveur avec la méthode $_POST au serveur
                let strCSV = "";
                for (n in lignes) {
                    if (!lignes[n]) continue;
                    strCSV += lignes[n] + "\n";
                }
                //envoi le nouveau CSV en serveur en POST
                //alert (strCSV);
                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", "high_scores.php", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send('csv=' + strCSV);
            }
            //Génère la table HTML

            let tb = `<table class="darkTable flip">\n` +
                `<thead>\n` +
                `<tr>\n` +
                `<caption>High Score</caption>\n` +
                `</tr>\n` +
                `</thead>\n`;

            for (n in lignes) {
                tb += `<tr>\n`;
                let resultscores = lignes[n].split(`;`);
                for (i in resultscores) {
                    tb += `<td>` + resultscores[i] + `</td>\n`;
                }

                tb += `</tr>\n`;
            }
            tb += `</tbody>
                    </table>
                    <button type="button" name="quit" id="quit" onclick="restart();">Restart</button>`;
            // alert(tb)
            highScore.innerHTML = tb;

            // console.log(tb);
        }
    };
}