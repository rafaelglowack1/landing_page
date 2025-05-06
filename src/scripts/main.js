document.addEventListener('DOMContentLoaded',function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    //esconde e aparece botão
    for (let i=0 ;i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            esconde();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
    

    })
    }

    const heroSection = document.querySelector('.hero') ;
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            ocultaHeader()
        }else{
            exibeHeader()
        }
    })


    // ocultar elementos do header
function ocultaHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')

}

// exibe elementos do header
function exibeHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')

}

// aparecer na aba de perguntas frequentes
    const questions = document.querySelectorAll('[data-faq-questions]');
    for ( let i = 0 ; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

// função e abrir ou fechar a aba de perguntas frequentes
function abreOuFechaResposta(elemento){
    const classe ='faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}



// remove botão
function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i=0 ;i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
//esconde 
function esconde(){
    const tabsContainer= document.querySelectorAll('[data-tab-id]');

    for (let i = 0 ; i<tabsContainer.length ; i++){
         tabsContainer[i].classList.remove('shows__list--is-active')
    }
}