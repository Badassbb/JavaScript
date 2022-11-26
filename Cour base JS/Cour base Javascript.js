//Déclaration de variable
// let age;

// //Affectation
// age = prompt();

// let name;

// name = "Nicolas"

// let firstName = "Toutou"

// //Déclaration d'une constante
// //Elle sert à sauvegarder quelques chose qui ne change pas dans le temps
// const TVA = 20;

// const PI = 3.14;

// let bool = true;

// let bool2 = false

// lES OPERATEURS ARITHMETIQUE                          // lES OPERATEURS D'AFFECTATION

/* 
+  => Addition                                          =       => x = y        => x = y
-  => Soustraction                                      +=      => x += y       => x = x + y
*  => Multiplication                                    -=      => x -= y       => x = x - y
** => Exponentation (au carré ² = 5**2 = 25)            *=      => x *= y       => x = x * y
/  => Division                                          /=      => x /= y       => x = x / y
%  => Modulo (Reste de la division)                     **=     => x **= y      => x = x ** y
++ => incrémentation
-- => Décrémentation

*/

 // lES OPERATEURS DE COMPARAISON
 /* 
 == 
 */

 //La condition if else et  else if

/*  let nbr = 4;

if(nbr > 18){
    console.log("vous avez un score de "+ nbr)
}else if(age > 5)
    
    console.log("arrête de jouer, fais autres chose !")
  else{
    console.log("tu es bidon!!")
  }
*/

 // La structure conditionnelles SWITCH

/*  let age = prompt("Quel est votre age ?")
    age = parseInt(age);
 
    switch (age) {
    case 25:
    console.log("vous avez" + age + " ans");
    break;
    case 18:
    console.log("Vous êtes majeur !");
    break;
    case 15:
    console.log("Vous êtes mineur mais en age de commander !");
    break;

    default:
    if (age < 10){
    console.log("tu es bien trop jeune mon bonhomme passe ton chemin !")
    }else{

    console.log("tu n'as pas l'age requis pour acheter sur ce site !");
    
    break;
    }
    }
 
//LES BOUCLES

/* La boucle for :

 for (let index = 1; index < 11 ; index++){
     console.log("tour de boucle n° "+index);
 }
 
*/

// La boucle while
/*
 let index = 0;
 while (index < 10) {
    
     console.log("tour de boucle while n° "+index);

     index++;
 }*/

// LA boucle doWhile

/*
let index = 0 ;

do {
        console.log("tour de boucle doWhile n° "+index);
        index++;
} while (index < 10);
*/

// Table de multiplication
/*
for (let index = 0; index <= 12; index++){
     console.log ("3 x " +index+ " = " +index*3);
}

let index = 0;
while (index <=12){
     console.log ("3 x " +index+ " = " +index*3);
     
     index++;
}*/

/*let index = 0;
do {
    //instruction
    console.log ("3 x " +index+ " = " +index*3);

    index++
}while (index < 13);

for (let index = 0; index <= 12; index++){
    console.log (`3 x ${index} = ${index*3}`);
}*/

// LES TABLEAUX EN JAVASCRIPT
/*let age = 14;

let fruits = [`orange`]; // créer le tableau
fruits.push(`pomme`); //ajoute pomme
fruits.push(`fraise`); // ajoute fraise au tableau
fruits.pop(); // retire le dernier élément du tableau
fruits.length; // récupération de la taille du tableau
fruits.shift() // permet de supprimer le premier élément du tableau
fruits.unshift(`fraise`) // permet d'ajouter un élément au début du tableau
fruits.splice(1,0,`citron`,`ananas`); // permet de supprimer  un élément à un endroit précis du tableau et ou d'ajouter  de nouveaux éléments 
//(le 1 signal la position "à partir de" et 0 signal que l'on ne veut rien supprimé).

let names = ["Alice", "Corinne", "John", "Patrice"]

let firstNames = [...names, "Nicolas", "Vincent", "Yassin", "Quentin"] //Ajoute un tableau dans un tableau existant
//firstNames.reverse()// inverse le sens du tableau
//firstNames.join(' - ')*/

//Les fonctions
//parseInt("25") converti en nombre
//parseFloat("25.5") converti en nombre flotant "à virgule"

//Syntaxe d'une fonction
//ex1
/*let saw_thanks = () => {
    console.log('Bienvenue dans notre première fonction');

}
//ex2
let table_multiplication = () => {
    for (let index = 0; index < 13; index++) {
        console.log (`3 x ${index} = ${index*3}`);
        
    }
}*/
/* Exemple 3 avec la déclaration fonction
function table_multiplication()
{
    for (let index = 0; index < 13; index++) {
        console.log (`3 x ${index} = ${index*3}`);
    }
}*/
/*
let table_multiplication = (nombre, limit = 20) => {
    if(typeof(limit) !== "number"){
        limit = 5;
    }
    if( nombre && typeof(nombre) === "number"){

    for (let index = 0; index <= limit; index++) {
        console.log(`${nombre} x ${index} = ${index*nombre}`);
    }
}else{
    console.log("le paramètre doit être un nombre");
    }
}*/
/*
let carree = (nombre) =>{
    if (nombre && typeof(nombre) === "number"){
        return nombre*nombre
    }else{
        return null // après un return l'instruction si elle est vérifié le programme s'arrête. Elle permet de sauvgardé une entré de la retourner
    }
}


// LES OBJETS EN JAVASCRIPT
//SYNTAXE CREATE OBJECT
//EX 1
let car = {}
car.immat = "CP-194-DP"
car.name = "Yaris"
car.year = 2014
car.color = "white"
// EX 2
let camion = {
    type: "Mercedes",
    name: "MG150",
    year:2024
}
let car2 = {...car, _id: 55224601}


let person = {
    firstname: "paul",
    lastname: "arthur",
    username : "popo",
    email: "popo#popo.popo",
    phone: "0742584060",
    adresse: "8 rue des développeurs",
    CP: 89000,
    country: "CanvasGradient",
}
//DECLARATION D'UNE METHODE
fullname = function(){
    return this.firstname+" "+this.lastname;
    
}
hello = function(){
    return "Hello, Welcome"+this.fullname;
}

let say_hello = ({firstname}) => {
    console.log(`Hello ${firstname}`);
}*/
