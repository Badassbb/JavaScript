const aerer = document.getElementById("btn1")
const espacer = document.getElementById("btn2")
const masquer = document.getElementById("btn3")
const para = document.querySelectorAll("p")


aerer.addEventListener("click", () => {
    para.style.padding="5px"
  });

espacer.addEventListener("click", () => {
    para.style.margin="5px"
});
  
masquer.addEventListener("click", () => {
    para.style.display=none;
});