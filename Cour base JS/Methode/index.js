//let tableau = [[pommes], [poire], [banane], [fraise], [abricot]];
/*for (let i = 0; i < tableau.length; i++)
{
    console.log("Fruit : "+tableau[i]);
}

for (var fruit in tableau)
{
    console.log ("Fruit : " + tableau[fruit]);
}*/

// let imgTag = document.getElementById('fruit');
// imgTag.src = 'ananas.jpg';

// let bTag = document.querySelectorAll('p b');
// bTag[0].textContent = 'un ananas';

// let color = document.getElementById('lien1');
// color = onmouseover.style.color = 'red';

// Déclaration de variable
/*let n1 = prompt("inscrit un nombre");
let n2 = prompt ("inscrit un nombre");
let n3 = prompt ("incrit un nombre");
let res = plusGrand3(n1, n2, n3);
// premier test

function plusGrand(ParseIntn1, ParseIntn2){
    if(n1 > n2){
        return n1;
    }else{
        return n2;
    }
}; 
*/


//exercice 2
// plus grand 3

/*function plusGrand3(ParseIntn1, ParseIntn2, ParseIntn3 ){
    if((n1 > n2) && (n1 > n3)){
        return n1;
    }if ((n2 > n1) && (n2 > n3)){
        return n2;
    }if ((n3 > n2) && (n3 > n1)){
        return n3;
    }
}; 
console.log(res);
*/
//Exercice 2
/*let an0 = 2022;
let Age = prompt("quel est votre année de naissance ? ");
let calculAge = (an0 - Age);
window.alert("vous avez " + calculAge + " ans");
*/
/*
let p = prompt("indiquer votre poid (Kg) :");
let t = prompt ("indiquer votre taille (cm) :")
let imc = (p / (Math.pow(t, 2))*10000);
window.alert("Votre imc est de : " + imc);


const num=15;
for(i=0; 15>0;i++);{
console.log(i);
}*/

// Exercice sur les méthode
/* 
const plants1 = ['brocoli', 'caulilflower', 'cabbage', 'Kale', 'tomato', 'potatoes'];
//console.log(plants.pop());

const plants2 = ['choux fleur', 'courgette', 'champignon'];

const plants = plants1.concat(plants2);
//console.log(plants);

console.log(plants.unshift("carotte", "bettrave"));

//console.log(plants.toString());

console.log(plants.join());
console.log(plants);
//plants.pop();
*/

const tabnum = [3, 12, 14, 28, 52, 6, 9, 15, 24, 32];
console.log(tabnum.sort((a,b) => a-b).join(', '));


