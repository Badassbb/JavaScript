// MANIPULATION D'ELEMENTS
/* Les objets éléments obtenus par la sélection possèdent des propriétés manipulables

- attributs
- contenu
- style CSS

il est possible d'agir sur ces propriétés après sélection de l'élément


Sur les éléments, les attributs html sont des propriétés

<div class="form-line><input="text" name="username"></div>
les attributs contenus de l'objet éléments récupérer soit dans l'exemple ci-dessus l'objt <div></div>
dans l'exemple ci-dessus class, type, name deviennent des propriétés en Javascript.

- Même nom, en minuscules, avec "conversion camelback"
- L'attribut class devient className
- L'attribut for devient htmlFor

La valeur peut être string, number ou boolean selon l'attribut

let formLine = document.querySelector(`.form-line`)
formLine.querySelector("label")


//LA METHODE getAttribute et setAttribute
- Dans ce cas, la valeur est toujours une chaîne de caractère.



let formLine = document.querySelector(`.form-line`)
formLine.querySelector("label")

formLine.setAttribute(`id`, `test-value-2`) créer une nouvelle id test-value-2 dans formLine
formLine.getAttribute(`id`) récupère la valeur de l'id pour vérifier si la valeur existe bien
*/

/*
// COMMENT MANIPULER LE CONTENU D'UN ELEMENT
** innerHTML **
la propriété innerHTML représente le contenu HTML d'un élément
- En lecture, sa valeur contient les balises
- En modification, son contenu est interprété par le navigateur

** textContent **
La propriété textContent représente le contenu textuel d'un élément
En lecture, sa valeur ne contient pas les balises HTML
En modification, son contenu n'est pas interprété par le navigateur

let paragraphe = document.querySelectorAll('.para')[0]

paragraphe.innerHTML = "<h3>TITLE</h3>" | innerHTML = change, modifie ou permet de récupèrer le contenu HTML
paragrapphe.textContent = "vous êtes nul en Javascript" | textContent = change ou modifie le text  ou récupère le texte chaîne de caractère. 


//MANIPULATION DU STYLE CSS
- La propriété style d'un éléments permets de modifier les propriétés CSS pour cet élément.
- On utilise directement le nom de la propriété CSS après "conversion camelback" si nécessaire

- font-size => fontSize
- border-right-style => borderRightStyle
- etc

- Les valeurs sont toujours des chaînes de caractères
- Les unités doivent être précisées



let paragraphe1 = document.querySelectorAll('.para')[0]
paragraphe1.style.color = "red";
paragraphe1.style.backgroundColor = "black";
paragraphe1.style.border = "2px solid yellow";

//ci-dessus sélection du premier paragraphe on change les propriétés css de cette élément 

let paragraphe2 = document.querySelectorAll('.para')[1]
paragraphe2.style.color = "white";
paragraphe2.style.backgroundColor = "black";
paragraphe2.style.border = "2px solid yellow";

//ci-dessus sélection du deuxième paragraphe on change les propriétés css de cette élément

let paragraphe3 = document.querySelectorAll('.para')[2];
paragraphe3.style.color = "white";
paragraphe3.style.backgroundColor = "blue";
paragraphe3.style.border = "1px solid yellow";

//ci-dessus sélection du troisième paragraphe on change les propriétés css de cette élément
*/

//  !!!ATTENTION!!!
/* L'attribut style ne permet pas d'accéder aux valeurs des propriétés définies dans
la feuille de style css ou scss. Il permet d'acéder seulement aux propriétés définies
dans le document HTML ou via style.

!!! Pour accéder aux valeurs du style :
Il faut utiliser getComputedStyle
La méthode getComputedStyle de l'objet window permet d'obtenir un objet regroupant
l'ensemble des valeurs des propriétés CSS appliquées par le navigateur pour un élément.

Les propriétés CSS
- Ont le même nom que précédemment (par de raccourci autorisé : margin interdit, utiliser marginLeft,...)
- Sont en lecture seule (pas de modification)
-Les unités s'expriment en valeur absolue (px,...)

window.getComputedStyle(".para").border

*/