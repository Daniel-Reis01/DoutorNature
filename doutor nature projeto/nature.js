


let primeiroValor = document.querySelector('h3');

let segundoDesconto = document.querySelector('h4');



    

    const valorprodutoA =  95.00;
    const descontoProdutoA =  0;

    const valorProdutoB =  148.60;
    const descontoProdutoB =  136.20;

    const valorProdutoC =  297.20;
    const descontoProdutoC =  150.20;
 

const seta = document.querySelector('#arrow')

seta.addEventListener('click', () => {
    window.scroll({top: window.innerHeight})
});



const btn1 = document.getElementById('#a1');

function boton(){

    
    switch(btn1){
        case addEventListener('click',() =>{
            primeiroValor.textContent ='R$ ' + valorprodutoA + ' por caixa';
            segundoDesconto.textContent ='Economize ' + ' R$ ' + descontoProdutoA ;
        }):
        break;
    }
}

const btn2 = document.getElementById('#b2');
function botonfix(){

    switch(btn2){
        case addEventListener('click',() =>{
            primeiroValor.textContent ='R$ ' + valorProdutoB + ' por caixa';
            segundoDesconto.textContent ='Economize ' + ' R$ ' + descontoProdutoB ;
        }):
        break;
    }
}
const btn3 = document.getElementById('#c3');

function botonlest(){
    switch(btn2){
        case addEventListener('click',() =>{
            primeiroValor.textContent ='R$ ' + valorProdutoC + ' por caixa';
            segundoDesconto.textContent ='Economize ' + ' R$ ' + descontoProdutoC ;
        }):
        break;
    }
};

