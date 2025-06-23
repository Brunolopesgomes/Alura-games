function alterarStatus(id){

 let jogo = document.getElementById(`game-${id}`);
 let botao = jogo.querySelector('.dashboard__item__button,.dashboard__item__button--return');
 let imagem = jogo.querySelector('.dashboard__item__img,.dashboard__item__img--rented');

if(botao.classList.contains('dashboard__item__button')){
    botao.classList.remove('dashboard__item__button');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devoler';
}else{
    botao.classList.remove('dashboard__item__button--return');
    botao.classList.add('dashboard__item__button');
    botao.textContent = 'Alugar';
}
if (imagem.classList.contains('dashboard__item__img')){
    imagem.classList.remove('dashboard__item__img');
    imagem.classList.add('dashboard__item__img--rented');
}
else{
    imagem.classList.remove('dashboard__item__img--rented');
    imagem.classList.add('dashboard__item__img');
}


}