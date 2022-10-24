let primeiroValor = document.querySelector("h3");

let primeiroDesconto = document.querySelector("h4");

let segundoValor = document.querySelector("h5");

let segundoDesconto = document.querySelector("#vista");

const valorprodutoA = "194.00";
const descontoProdutoA = 0;
const promocaoProdutoA = 21.75;
const vistaProdutoA = "194.00";

const valorProdutoB = 148.6;
const descontoProdutoB = 136.2;
const promocaoProdutoB = 49.99;
const vistaProdutoB = 445.8;

const valorProdutoC = 118.9;
const descontoProdutoC = 450.6;
const promocaoProdutoC = 79.99;
const vistaProdutoC = 713.4;

const seta = document.querySelector("#arrow");

seta.addEventListener("click", () => {
  window.scroll({ top: window.innerHeight });
});

const btn1 = document.getElementById("#a1");

function boton() {
  switch (btn1) {
    case addEventListener("click", () => {
      primeiroValor.textContent = "R$ " + valorprodutoA + " por caixa";
      primeiroDesconto.textContent = " ";
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoA;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoA + " á vista";
    }):
      break;
  }
}

const btn2 = document.getElementById("#b1");

function botonfix() {
  switch (btn2) {
    case addEventListener("click", () => {
      primeiroValor.textContent = "R$ " + valorProdutoB + " por caixa";
      primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoB;
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoB;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoB + " á vista";
    }):
      break;
  }
}
const btn3 = document.getElementById("#c1");

function botonlest() {
  switch (btn3) {
    case addEventListener("click", () => {
      primeiroValor.textContent = "R$ " + valorProdutoC + " por caixa";
      primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoC;
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoC;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoC + " á vista";
    }):
      break;
  }
}

const botnA = document.getElementById("#aa1");

function botao() {
  switch (botnA) {
    case addEventListener("click", () => {
      console.log("0");
      primeiroValor.textContent = "R$ " + valorprodutoA + " por caixa";
      console.log("1");
      primeiroDesconto.textContent = " ";
      console.log("2");
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoA;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoA + " á vista";
    }):
      break;
  }
}

const botao2 = document.getElementById("#bb");
function central() {
  switch (botao2) {
    case addEventListener("click", () => {
      console.log("0");
      primeiroValor.textContent = "R$ " + valorProdutoB + " por caixa";
      // console.log('1')
      primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoB;
      // console.log('2')
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoB;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoB + " á vista";
    }):
      break;
  }
}
const botn = document.getElementById("#cc");

function longe() {
  switch (botn) {
    case addEventListener("click", () => {
      primeiroValor.textContent = "R$ " + valorProdutoC + " por caixa";
      primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoC;
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoC;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoC + " á vista";
    }):
      break;
  }
}

function checkUncheck(el) {
  if (el.getAttribute("src") == "img/check-icon.png") {
    el.setAttribute("src", "img/check-icon-green.png");
  } else {
    el.setAttribute("src", "img/check-icon-green.png");
  }
}

let minhaImagem = document.getElementById("marcador");

minhaImagem.onclick = function () {
  let meuSrc = minhaImagem.getAttribute("src");

  if (meuSrc === "img/check-icon.png") {
    minhaImagem.setAttribute("src", "img/check-icon-green.png");
  } else {
    minhaImagem.setAttribute("src", "img/check-icon.png");
  }
};

let minhaImagemA = document.getElementById("marcadorA");

minhaImagemA.onclick = function () {
  let meuSrc = minhaImagemA.getAttribute("src");

  if (meuSrc === "img/check-icon.png") {
    minhaImagemA.setAttribute("src", "img/check-icon-green.png");
  } else {
    minhaImagemA.setAttribute("src", "img/check-icon.png");
  }
};

let minhaImagemB = document.getElementById("marcadorB");

minhaImagemB.onclick = function () {
  let meuSrc = minhaImagemB.getAttribute("src");

  if (meuSrc === "img/check-icon.png") {
    minhaImagemB.setAttribute("src", "img/check-icon-green.png");
  } else {
    minhaImagemB.setAttribute("src", "img/check-icon.png");
  }
};

let minhaImagemC = document.getElementById("marcadorC");

minhaImagemC.onclick = function () {
  let meuSrc = minhaImagemC.getAttribute("src");

  if (meuSrc === "img/check-icon.png") {
    minhaImagemC.setAttribute("src", "img/check-icon-green.png");
  } else {
    minhaImagemC.setAttribute("src", "img/check-icon.png");
  }
};

let minhaImagemG = document.getElementById("marcadorgold");

minhaImagemG.onclick = function () {
  let meuSrc = minhaImagemG.getAttribute("src");

  if (meuSrc === "img/check-icon-mobile.png") {
    minhaImagemG.setAttribute("src", "img/check-icon-mobile-checked.png");
  } else {
    minhaImagemG.setAttribute("src", "img/check-icon-mobile.png");
  }
};

function escondeA(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}

function escondeB(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}

function escondeC(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}
function escondeC(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}
function escondeD(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}
function escondeE(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}
function escondeF(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}
function escondeG(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}
function escondeH(el) {
  let display = document.getElementById(el).style.display;

  if (display == "block") {
    document.getElementById(el).style.display = "none";
    console.log("block");
  } else {
    document.getElementById(el).style.display = "block";
    console.log("none");
  }
}
// const bot = document.getElementById('#aa');

// function botao(){

//     switch(bot){
//         case addEventListener('click',() =>{
//             console.log('0')
//             primeiroValor.textContent ='R$ ' + valorprodutoA + ' por caixa';
//             console.log('1')
//             primeiroDesconto.textContent =' ';
//             console.log('2')
//             segundoValor.textContent ='HOJE: ' + '12X ' + 'R$' + promocaoProdutoA ;
//             segundoDesconto.textContent ='ou R$ ' + vistaProdutoA +' á vista' ;

//         }):
//        break;
//     }
// }

// const botao2 = document.getElementById('#bb');
// function central(){

//     switch(botao2){
//         case addEventListener('click',() =>{
//             console.log('0')
//             primeiroValor.textContent ='R$ ' + valorProdutoB + ' por caixa';
//             // console.log('1')
//             primeiroDesconto.textContent ='Economize ' + ' R$ ' + descontoProdutoB ;
//             // console.log('2')
//             segundoValor.textContent ='HOJE: ' + '12X ' + 'R$' + promocaoProdutoB ;
//             segundoDesconto.textContent ='ou R$ ' + vistaProdutoB +' á vista' ;
//         }):
//         break;
//     }
// }
// const botn = document.getElementById('#cc');

// function longe(){
//     switch(botn){
//         case addEventListener('click',() =>{
//             primeiroValor.textContent ='R$ ' + valorProdutoC + ' por caixa';
//             primeiroDesconto.textContent ='Economize ' + ' R$ ' + descontoProdutoC ;
//             segundoValor.textContent ='HOJE: ' + '12X ' + 'R$' + promocaoProdutoC ;
//             segundoDesconto.textContent ='ou R$ ' + vistaProdutoC +' á vista' ;
//         }):
//         break;
//     }
// };
