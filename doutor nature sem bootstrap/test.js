function esconde(el) {
    let display = document.getElementById(el).style.display;

    if(display == "none"){

        document.getElementById(el).style.display = 'block'; 
       console.log('block') 
    }else{

        document.getElementById(el).style.display = 'none';
           console.log('none')
    }
}
function mostra(el) {

    var display = document.getElementById(el).style.display;

    if(display == "none"){

        document.getElementById(el).style.display = 'block'; 

    }else{

        document.getElementById(el).style.display = 'none';

    }
} 
function toggle(el) {

    var display = document.getElementById(el).style.display;

    if(display == "none"){

        document.getElementById(el).style.display = 'block';

    }else{

        document.getElementById(el).style.display = 'none';
    }
}   

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Este é o texto do h3");

el.appendChild(texto);

console.log(el);

// selecionar o elemento que quero trocar
var title = document.querySelector("#title");

console.log(title);

// selecionar o pai do el
var pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title);


function esconderMostrar(el) {
  
    if (document.querySelector("p").style.display == "block") {
      document.querySelector("p").style.display = 'none';
      console.log("block");
    } else {
      document.querySelector("p").style.display = "block";
      console.log("none");
    }
  }