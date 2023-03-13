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