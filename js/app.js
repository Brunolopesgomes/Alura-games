function alterarStatus(id){

    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img,.dashboard__item__img--rented');
     let botao =  jogo.querySelector('.dashboard__item__button,.dashboard__item__button--return');

if( botao.classList.contains('dashboard__item__button')){
    botao.classList.remove('dashboard__item__button');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
}
else{
   botao.classList.remove('dashboard__item__button--return');
    botao.classList.add('dashboard__item__button');
    botao.textContent = 'Alugar';
}

if(imagem.classList.contains('dashboard__item__img')){
    imagem.classList.remove('dashboard__item__img');
    imagem.classList.add('dashboard__item__img--rented');

}
else{
    imagem.classList.remove('dashboard__item__img--rented');
     imagem.classList.add('dashboard__item__img');
}

}