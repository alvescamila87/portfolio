//opção 1 de fazer:

const { ifError } = require("assert")

/*
function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
}
*/


//opção 2 de fazer:

function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    //pegar a imagem
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {

        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar.png')

        //se tiver sem imagem light mode, manter a imagem normal
    } else {
        img.setAttribute('src', './assets/avatar-dark.png')
    }
}