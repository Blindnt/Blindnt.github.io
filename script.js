const wrapper document.querySelector(".wrapper"); const question document.querySelector(".question");

const gif document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");

const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () {

question.innerHTML = "Aaaaa, I like you too";

gif.src =

"https://raw.githubusercontent.com/Dzare Developer/Img/main/gif.webp"; });

noBtn.addEventListener("mouseover", () => {

const noßtnRect = noßtn.getBoundingClientRect();

const maxX = window.innerWidth noßtnRect.width;

const maxY = window.innerHeight - noßtnRect.height;

const randomX = Math.floor(Math.random() maxx);

const randomy Math.floor(Math.random() maxY); noBtn.style.left noBtn.style.top }); randomX + "px"; randomy + "px";