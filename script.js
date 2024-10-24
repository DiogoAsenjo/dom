"use strict";

const h1 = document.querySelector("h1"); //Selecionando pela tag.
const classe = document.querySelector(".classe"); //Selecionando classe precisa de .
const id = document.querySelector("#id"); //Selecionando id precisa de #

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
  title.innerText = `Tempo na página: ${timer}`;
  timer++;
}, 1000);

const allPs = document.querySelectorAll("p"); //Selecionando todas as tags p da página.

allPs.forEach((element, index) => {
  if (index === 0) {
    element.style.background = "blue";
  }
  if (index === 1) {
    element.style.background = "red";
  }
});
