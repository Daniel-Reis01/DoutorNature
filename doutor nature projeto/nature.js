// const promocionalBotaoA = document.getElementById(a1);
// promocionalBotaoA.addEventListener('click' function(){
     
// });
// const promocionalBotaoB = document.getElementById(b2);
// const promocionalBotaoC = document.getElementById(c3);


// function carregarPromocional(){



let primeiroValor = document.querySelector('h4');

let segundoDesconto = document.getElementById('#eco1');



    

    const valorprodutoA =  95.00;
    const descontoProdutoA =  0;

    const valorProdutoB =  148.60;
    const descontoProdutoB =  136.20;

    const valorProdutoC =  297.20;
    const descontoProdutoC =  297.20;
 

//     if (a) {

//         primeiroValor.textContent ='R$' + valorprodutoA + 'por caixa';
        
//         primeiroDesconto.textContent = 'economize' + 'R$' + descontoProdutoA ;

//         console.log( 'erro 1');

//      } else if (a) {  

//         primeiroValor.textContent ='R$' + valorprodutoB + 'por caixa';
        
//         primeiroDesconto.textContent = 'economize' + 'R$' + descontoprodutoB;
        
//         console.log('erro 2');

//     } else {
        
//         primeiroValor.textContent ='R$' + valorprodutoC + 'por caixa';
        
//         primeiroDesconto.textContent = 'economize' + 'R$' + descontoprodutoC ;
        
//         console.log('erro3');
//     } 

// }

const seta = document.querySelector('#arrow')

seta.addEventListener('click', () => {
    window.scroll({top: window.innerHeight})
});



const btn1 = document.getElementById('#a1');

function boton(){

    
    switch(btn1){
        case addEventListener('click',() =>{
            primeiroValor.textContent ='R$ ' + valorprodutoA + ' por caixa';
            segundoDesconto.textContent ='economize' + 'R$' + descontoProdutoA ;
        }):
        break;
    }
}

const btn2 = document.getElementById('#b2');
function botonfix(){

    switch(btn2){
        case addEventListener('click',() =>{
            primeiroValor.textContent ='R$ ' + valorProdutoB + ' por caixa';
            segundoDesconto.textContent ='economize' + 'R$' + descontoProdutoB ;
        }):
        break;
    }
}
const btn3 = document.getElementById('#c3');

function botonlest(){
    switch(btn2){
        case addEventListener('click',() =>{
            primeiroValor.textContent ='R$ ' + valorProdutoC + ' por caixa';
            segundoDesconto.textContent ='economize' + 'R$' + descontoProdutoC ;
        }):
        break;
    }
}

