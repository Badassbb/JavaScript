//SELECTEURS
//document.querySelector("h4").style.background = "purple";
//const baliseHTML = document.querySelector("h4");
//console.log(baliseHTML);
//baliseHTML.style.background = "red";

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const response = document.querySelector("p");
console.log(btn1, btn2, btn3);
questionContainer.style.borderRadius = "20px";
console.log(response);

questionContainer.addEventListener("click", () => {
//questionContainer.style.background = "red";
questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
});

btn2.addEventListener("click", () => {
  response.classList.add("show-false");
});

//mouse Events------------------------------------
const mousemove = document.querySelector(".mousemove");
console.log("mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0, 0, 0)";
});

questionContainer.addEventListener("click", () => {
  questionContainer.style.background = "purple";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// KeyPress event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (key) => {
  const audio = new Audio();
  audio.src = "assets/audio/Foley Bell Brass Handbell Ring.mp3";

  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if ((e.key = "j")) {
    keypressContainer.style.background = "pink";
  } else if (e.key === "e") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key)
});

//---------------------------------------------------
//Scroll Event
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});
//----------------------------------------------------------------
// Form Evetns

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language ="";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
 language = e.target.value;
  console.log(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(cgv.checked){
    document.querySelector(`form > div`).innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Language préféré : ${language}</h4>
    `;
    // Affiche le contenu des variables
  }else{
    alert("veuillez accepter les CGV");
  }
  console.log("yes we can !");
});

//------------------------------------------
//Load Event
/*
window.addEventListener("load", () => {
  console.log("document Chargé !");
});*/

//---------------------------------------------
//For each
/*const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) =>{
    e.target.style.transform = "scale(0.7)";
    console.log(e.target);
  });
});*/

//---------------------------------------------
//Calculatrice
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
    result.textContent += e.target.id;
  });
});

equal.addEventListener('click', () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener('click', () =>{
  result.textContent = "";
});

//---------------------------------------------------
//addEventListener VS onclick
// document.body.onclick = function(){
//   console.log("Click !");
// };

//Bulding => fin (de base l'eventlistener est Bulbing)
document.body.addEventListener(
  "click", 
() => {
  console.log("Click 1 !");
});

//Usercapture
document.body.addEventListener(
  'click',
  () => {
    console.log("click 2 !");
  },
  true
);

//---------------------------------
//Methode Stop propagation
questionContainer.addEventListener("click", (e) =>{
alert("Vous avez cliqué dans le container question !");
e.stopPropagation();
});

//removeEventListener

//----------------------------------------------
//BOM Brother Object Model
//console.log(window.innerHeight);

//----------------------------------------
//ouvrir une fenêtre
//window.open('http://google.com', "cours js", "height=600", "width=800");

//------------------------------------------
//Ferme la fenêtre
//window.close()

//-------------------------
//Evénements adossés à Window
//alert("Hello");

//confirm
btn2.addEventListener("click", () => {
confirm("Voulez-vous appuyer sur la mauvaise réponse !");
});

//prompt
btn3.addEventListener("click", () => {
  let answer = prompt('Entrez votre nom !');

  questionContainer.innerHTML += "<h3>" + answer + "</h3>";
});

// Timer,compte à rebours
btn3.addEventListener("click",() => {
click = setTimeout(() => {
  //logique temps à executer
  questionContainer.style.borderRadius = "300px"
}, 2000);
});

/*
let interval = setInterval(() => {
document.body.innerHTML +=
  `<div class='box'>
  <h2>Nouvelle Boite !</h2>"
  </div>
  `;
},1000);*/

//retirer un element du DOM
/*document.body.addEventListener("click", (e) =>{
  e.target.remove();
  clearInterval(interval);
});*/
