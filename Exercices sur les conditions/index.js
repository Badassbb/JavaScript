//JS 06 Les Conditions Exercice 2 AGE 
let A =window.prompt("quel est votre année de naissance ?");
const b = 2022;
let c = parseInt(A);
alert ("Votre age est : " + (b - c ));

//JS 06 Les conditions Exercice 3 la calculatrice 

let nb1 = prompt("Choisir un nombre");
 let nb2 = prompt("Choisir un deuxième nombre");
 let operateur = prompt("choisir un operateur +, -, *, ^ ou /");
 switch (operateur)
 {  case "+" :  x = Number(nb1);  y = Number(nb2);
         alert ("le résultat est " + (x + y));
         break;
     case "-" :
         alert ("le résultat est " + (nb1 - nb2));
         break;
    case "*" :
         alert ("le résultat est " + (nb1 * nb2));
         break;
    case "/" :
         if(nb2==0) {
             alert("Division par 0 est impossible !");
         }
         else {
             alert("le résultat est " + (nb1 / nb2));
         }    
         break;
    default :
        alert ("l'opérateur n'est pas correct.");
}


// JS 06 Les Conditions Exercice 4 Remise
/*4 - Remise
A partir de la saisie du prix unitaire PU d’un produit et de la quantité commandée QTECOM, afficher
le prix à payer PAP, en détaillant le port PORT et la remise REM, sachant que :
 le port est gratuit si le prix des produits TOT est supérieur à 500 €. Dans le cas contraire, le
port est de 2% de TOT
 la valeur minimale du port à payer est de 6 €
 la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
*/

let PU = window.prompt("Indiquez le prix unitaire de l'article");
let QTECOM = window.prompt("Indiquez le nombre d'article commandé"); 
let TOT = parseInt(PU) * parseInt(QTECOM); //Prix total du panier
let PORT; // Frais de port
let REM; // Remise

if (TOT > 500) {
    PORT = parseInt (0);
}if (TOT <= 500 ){
    PORT = ((TOT * 2)/ 100);
    PORT = parseInt(PORT);
}if 
    (PORT < 6){
    PORT = 6;
}else{
    PORT = PORT;
} 

if (TOT > 200){ 
    REM = ((TOT * 10) / 100);
}else{
    if  ((TOT >= 100) && (TOT <= 200)){
         REM = ((TOT * 5) / 100);
} 
 else {
    REM = 0;
}
}

let PAP = (TOT - REM + PORT); 
let fact = alert("Le Montant total à payer est de : " + PAP + " Le montant de vos frais de port est de " + PORT + " € . Votre remise est de " + REM + "€ .");


/*
// JS 06 Les Conditions Exercice 5 PARTICIPATION
Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la
façon suivante :
 si il est célibataire : participation de 20%
 si il est marié : participation de 25%
 si il a des enfants : participation de 10% supplémentaires par enfant
La participation est plafonnée à 50%
Si le salaire mensuel est inférieur à 1200 € la participation est majorée de 10%.
Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation
à laquelle il a droit.*/

let celibataire = confirm("le salarié est-il célibataire ?");
let enfant = prompt("combien a t-il d'enfant ?");
let salaire = prompt ("Quel est son salaire mensuel ?");
let maxParticipation = 50;
let participation1;
let participation2;

if (celibataire == true)
{
    if (salaire < 1200)
    {
        participation1 = 30;
    
    }
    else
    {
        participation1 = 20;
    }
}
else
{
    if (salaire < 1200)
    {
        participation1 = 35;
    }
    else
    {
        participation1 = 25;
    }
}
participation2 = ((parseInt(enfant,10))*10);

let participationTot = (parseInt(participation1, 10) + parseInt(participation2, 10));

if (participationTot > maxParticipation)
{
    participationTot = maxParticipation;
}
else
{
    participationTot = participationTot;
}
alert("La participation est de " + participationTot + "%.");
