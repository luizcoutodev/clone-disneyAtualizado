document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')
    const heroSection = document.querySelector('.hero')
    const heroHeight = heroSection.clientHeight;
    ocultaElementoHeader();   
   
    window.addEventListener('scroll', function(){
        const position =  window.scrollY;

        // if (position < heroHeight) {
        //     ocultaElementoHeader();
        // } else {
        //     exibeElementosHeader();
        // }
    
    })
    
    // Seçao de atraçoes, programação abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button){
            const targetTab = button.target.dataset.tabButton;
            // a funçao dataset ja pega o DATA da classe e transforma o atributo em CAMELCASE automaticamente, assim so precisamos resgatar o CAMELCASE GERADO pelo DATASET.
            // LOGO a constante targeTAB é IGUAL AO TAB BUTTON ex: em_breve
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            // essa constante só selecionou o TARGET do BOTÃO clicado.
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tab__button--is-active');
        })
    }

    // Seçao FAQ, accordion
    for (let i=0; i< questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
        // loop de menu do perguntas fequentes.
    }
})

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tab__button--is-active');
    }
    
    
}

function hideAllTabs () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
    // LOOP QUE REMOVE TODAS AS CLASSES do HTML e DEIXA AS AABAS "INATIVAS"
}

function abreOuFechaResposta(element) {
    const classe = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    console.log(parentElement);
    parentElement.classList.toggle(classe);
    // aqui apenas foi inserido a classe que ativa no elemento pai. 
}

function ocultaElementoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}