function alterarStatus(id){

let gameclicado = document.getElementById(`game-${id}`);

let imagem = gameclicado.querySelector('.dashboard__item__img , .dashboard__item__img--rented ');

let botao = gameclicado.querySelector('.dashboard__item__button, .dashboard__item__button--return');

let nomeJogo = gameclicado.querySelector('.dashboard__item__name');

if (botao.classList.contains('dashboard__item__button')){
    botao.classList.remove('dashboard__item__button');
    botao.classList.add('dashboard__item__button--return');
    
}else{
    botao.classList.remove('dashboard__item__button--return');
    botao.classList.add('dashboard__item__button');
   
}
if ( botao.textContent == 'Alugar'){
    botao.textContent = 'Devolver';
}else{
    botao.textContent = 'Alugar';

}
if(imagem.classList.contains('dashboard__item__img')){
    imagem.classList.remove('dashboard__item__img');
    imagem.classList.add('dashboard__item__img--rented');
}else{
    imagem.classList.remove('dashboard__item__img--rented');
    imagem.classList.add('dashboard__item__img');
}

}
