"use strict";
//Aula de seleção de elementos
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

//Alterando valores
const pQueOsValoresSeraoAlterados = document.querySelector("#alterandoValor");

//Adicionando elemento html com inner hmtl
const divParaAlterar = document.querySelector("#criandoCoisas");
divParaAlterar.innerHTML = `${divParaAlterar.innerHTML} <strong>Adicionando texto strong via innerHTML no JS</stong`;

//Adicionando elemento com createElement
const array = [1, 2, 3];
const elementUl = document.createElement("ul");
array.forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.setAttribute("id", `lista${element}`); //Setando atributo.
  elementLi.innerText = element;
  elementUl.appendChild(elementLi);
});

divParaAlterar.appendChild(elementUl);

//Removendo elemento
const elementoLi = document.querySelector("#lista1");
console.log(elementoLi);
elementoLi.remove();

//Manipulando input. Usa value ao invés de innerText
const inputNome = document.querySelector("#nome");
inputNome.value = "Valor Padrão";
