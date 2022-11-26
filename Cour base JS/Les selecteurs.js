// LES SELECTEURS EN JAVASCRIPT

//LA METHODE getElementByld
//La méthode getElementbyld seclectionne l'unique élément du document dont l'identifiant est fourni en paramètre, ou null si aucun élément est existant.
//Le résultat est un objet élément (de type HTML ELEMENT)

//let HTML = document.getElementById("html")

// "ci-dessus nous déclarons une variable HTML qui récupère notre document html et qui sélectionne le sélecteur id"html"

//LA METHODE getElementsByClassName
/*La méthode getElementsByClassName sélectionne les éléments dont la classe est fourni en paramètre
- Peut s'utiliser sur l'objet document ou sur l'objet élément (dans ce cas seuls les éléments descendants sont sélectionnés).
*/

//let section = document.getElementsByClassName(`section`);

//LA METHODE getElementsByName
/*La méthode getElementsByName sélectionne les éléments dont l'attribut name est fourni en paramètre 

document.getElementsByName(`username`)[0] cible l'élément username et récupère la donnée 1 = 0
document.getElementsByName(`password`)[0] cible l'élément password et récupère la donnée 1 = 0

*/

//LA METHODE getElementsByTagName
/*La méthode getElementsByTagName sélectionne les éléments dont la balise est fourni en paramètre
- Se comporte comme getElementsByClassName


let input = document.getElementsByTagName(`input`)[0]

let body = document.getElementsByTagName(`body`)[0]
*/

//LA METHODE querySelectorAll
/*La méthode querySelectorAll sélectionne les éléments retenus par le sélecteur CSS fourni en paramètre

- Peut s'utiliser sur l'objet "document" ou sur l'objet "élément" (dans ce cas seuls les éléments descendants sont sélectionnés).

- A pour résultat la liste des éléments sélectionnés. Cette liste n'est pas dynamique.

!!! ATTENTION !!!
Les sélecteurs avec les pseudo-classes : link, :visited et les pseudo-éléments ne sont pas acceptés.

let section = document.querySelectorAll(".section") //permet de récupérer les éléments de class section
console.log("section") 

let css = document.querySelector("#css") // permet de récupérer l'élément id css de notre page html
console.log("css")

let elt = document.querySelector(`section`) //sélectionne tous les éléments enfant "article" contenu de class parent section
elt.querySelectorAll(`article`)[0] // si on veux récupérer le seul élément premier du tableau on utilise les crochet [0]

*/

/* //EQUIVALENCE
document.getElementById("book") = document.querySelector("#book")
document.getElementsByClassName("uneClasse") = document.querySelectorAll(".uneClasse")
document.getElementsByTagName("uneBalise") = document.querySelectorAll("uneBalise")

Mais les liste ne sont pas dynamiques avec querySelectorAll elles sont static*/

/*
En résumé pour manipuler les éléments de la page HTMLAllCollection, il faut au préalable les sélectionner.EnLa sélection d'élément peut se faire :

-Par son attribut id (#)
Par son attribut class (.)
Par son attribut name ("firstname")
par sa balise (section, body, p, article...)
par un sélecteur CSS (# ou . ou n'importe quelle autres selecteur CSS sauf pseudo-class)

et que l'on sélection les éléments de manière précise en utilisant le sélecteur entre []

*/


