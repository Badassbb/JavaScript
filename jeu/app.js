const bienvenue = document.getElementById("bienvenue");
const boardgame = document.getElementById("boardgame");
const carte = document.getElementById("card_1");
const quittez = document.getElementById("quit");
const pscore = document.getElementById("score");
const highScore = document.getElementById("highScore");
let score = 0;

document.body.onkeydown=function(e){
	if(e.key=="s"){
        console.log("vous avez appuyez sur s");
        start();
    }      
}
/*document.addEventListener("keydown", function(event) {
    if (event.key === "s") {
        start()
    }
});*/


function start() {
    bienvenue.style.display = 'none';
    boardgame.style.display = 'block';
}



function cardclick(numeroCarte) {
    
    carte.className = "flip";
    const numeroAleatoire = Math.floor(Math.random() * 4);
    console.log("vous avez choisi la carte numéro " + numeroCarte + "Le nombre aléatoire est : " + numeroAleatoire);
    if(numeroCarte == numeroAleatoire){
        score += 400;
        console.log("tu as gagné 400 points")
    }else{
        score -= 100;
        console.log("tu as gagné 100 points")
    }
    pscore.textContent = "Score : " + score + " points"
}

function quitterLaPartie(){
    boardgame.style.display = 'none';
// Envoie une requête HTTP au serveur web et récupère sa réponse,
// met à jour localement le DOM sans charger une nouvelle page.

    // Le mot-clé new crée une nouvelle instance de la classe XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    // on peut préciser le script ou une URL à la place
    xhttp.open("GET", "nouveau_score.php?score=" + score, true);
    xhttp.send();

    // Callback qui sera invoqué plus tard par Javascript 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            highScore.style.display = 'block';
            
            //alert ('200 OK chaîne reçue:' + this.responseText);
            // this fait référence à l'objet qui utilise ce terme, ici xhttp
          
            let tb =    `<table class="darkTable flip">\n` +
                        `<thead>\n` +
                        `<tr>\n` +
                        `<caption>High Score</caption>\n` +
                        `</tr>\n` +
                        `</thead>\n`;
                        
            let lignes = this.responseText.split(`\n`);
            for(n in lignes)
            {
                if(!lignes[n])continue;
                tb += `<tr>\n`;
                const highscores = lignes[n].split(";")   
                for(i in highscores)
                {
                    tb += `<td>` + highscores[i] + `</td>\n`
                }
                tb += `</tr>\n`;
            }
            tb +=   `</tbody>\n` +
                    `</table>`;
            highScore.innerHTML = tb;
            console.log(tb);
        }
    };
}
/*
const ligne = csv.split(`\n`);
let strTableHTML = '<table>';


strTableHTML += '</table>';
document.getElementById('strTableHTML').innerHTML = strTableHTML;*/
         
    
