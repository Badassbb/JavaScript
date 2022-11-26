const prenom = "Justine";
console.log(prenom);

let unChiffre = 24;
unChiffre = 12;

console.log(unChiffre);
let chaine = "Je suis une chaîne de caractère";
console.log(chaine);

let nouvelleChaine = `Le chiffre attendu est : ${unChiffre} de degré`;
console.log(nouvelleChaine);
let array = ["je", "suis", 24, false];
let objet = {
  prenom: "audrey",
  age: 34,
  ville: "bordeaux",
};

console.log(typeof array);

let arbre;
let total = 0;
total++;
total++;
total++;
total++;
total += 5;

console.log(total);

let x = 4;
let totalx = x;
x = ++x;

console.log(totalx);

let a = 5;
let b = 5;

//si et si sinon

if (a === b) {
  console.log("True !");
} else if (a == y) {
  console.log("a et b sont égaux en valeur");
} else {
  console.log(x + "et" + y + " ne sont pas du tout égaux");
  console.log(`${x} et ${y} ne sont pas du tout égaux`);
}

a == b ? console.log("True !") : console.log("false !");

//function
function faireQuelqueChsoe() {
  console.log("Je fais un truc !");
  console.log("Trop cool");
}

faireQuelqueChsoe();

const faireUneTache = (tache) => {
  console.log("Je programme " + tache);
};
faireUneTache("JavaScript");
faireUneTache("HTML");
faireUneTache("CSS et SCSS");

function add2() {
  let y = 4;
  return y + 2;
}
add2();

(function () {
  console.log("Je me joue toute seule");
})();

(() => {
  console.log("Je me joue aussi toute seule");
})();
