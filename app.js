let bar = document.getElementById("menuBar");
let menuNavbar = document.querySelector(".nav-menu");

bar.addEventListener("click", function(){
    menuNavbar.classList.toggle("openMenu");
    bar.classList.toggle("whiteBar");
});

let apple = document.getElementById("apple");
let mango = document.getElementById("mango");
let watermelon = document.getElementById("watermelon");
let dragon = document.getElementById("dragon");
let pineApple = document.getElementById("pineApple");

let body = document.body;
let fruit = document.getElementById("fruit");

apple.addEventListener("click",function(){
    body.style.backgroundColor = "rgb(235, 88, 88)";
    menuNavbar.style.backgroundColor = "rgb(152 36 36)";
    fruit.src = "apple.png";
});
mango.addEventListener("click",function(){
    body.style.backgroundColor = "rgb(209 209 33)";
    menuNavbar.style.backgroundColor = "rgb(161 161 26)";
    fruit.src = "mango.png";
});
watermelon.addEventListener("click", function(){
    body.style.backgroundColor = "#53a153";
    menuNavbar.style.backgroundColor = "#216921";
    fruit.src = "watermelon.png";
});
dragon.addEventListener("click", function(){
    body.style.backgroundColor = "rgb(205 95 196)";
    menuNavbar.style.backgroundColor = "rgb(125 33 118)";
    fruit.src = "dragonFruits.png";
});
pineApple.addEventListener("click", function(){
    body.style.backgroundColor = "rgb(183 202 33)";
    menuNavbar.style.backgroundColor = "rgb(115 127 23)";
    fruit.src = "pineApple.png";
});