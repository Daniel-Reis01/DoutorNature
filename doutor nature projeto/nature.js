// const promocionalBotaoA = document.getElementById(a1);
// promocionalBotaoA.addEventListener('click' function(){
     
// });
// const promocionalBotaoB = document.getElementById(b2);
// const promocionalBotaoC = document.getElementById(c3);


// function carregarPromocional(){



// let primeiroValor = document.querySelector('h4');
// let segundoValor = document.querySelector('h5');
// let segundoDesconto = document.querySelector('p');
// let  primeiroDesconto = document.querySelector('p');


    

//     const valorprodutoA =  95.00;
//     const descontoProdutoA =  95.00;

//     const valorprodutoB =  148.60;
//     const descontoprodutoB =  148.60;

//     const valorprodutoC =  297.20;
//     const descontoprodutoC =  297.20;
 

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