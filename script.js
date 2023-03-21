// Mudança do site de escuro para claro
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/trote.png')
        img.setAttribute('alt', 'Logo do Trote Solidário 2023')
    } else {
        img.setAttribute('src', './assets/trote-fundo-branco.png')
        img.setAttribute('alt', 'Logo do Trote Solidário 2023 com escritas em branco')
    }
}

// Código para o botão menu mobile 
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', 'true');
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }
    else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu ');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Calculadora