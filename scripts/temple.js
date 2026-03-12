document.getElementById("currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent =  `Last Modified: ${document.lastModified}`

const hamBurger = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamBurger.addEventListener("click", function(){
    navigation.classList.toggle("hamburger");
    hamBurger.classList.toggle("hamburger");   
});
