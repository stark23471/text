const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adiciona a classe 'sticky' após rolar 50px
        cabecalho.classList.add('sticky');
    } else {
        cabecalho.classList.remove('sticky');
    }
});
