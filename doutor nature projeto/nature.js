let promocionalBotaoA = document.getElementById(a1);
let promocionalBotaoB = document.getElementById(b2);
let promocionalBotaoC = document.getElementById(c3);

let primeiroValor = document.querySelector('h4');
let  valorDesconto = document.querySelector('p');

function mostrarProdutosDescontos(){
     let  valorprodutoA =  95.00;
     let  valorprodutoB =  148.60;
     let  valorprodutoC =  297.20;


     if (a1.Clicked == true ) {
        primeiroValor.textContent ='R$' + valorprodutoA + 'por caixa';
        
     } else if (b2.Clicked == true){
        primeiroValor.textContent ='R$' + valorprodutoC + 'por caixa';
    }else{
        primeiroValor.textContent ='R$' + valorprodutoB + 'por caixa';
    };

}
