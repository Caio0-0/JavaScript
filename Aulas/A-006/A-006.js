var a = window.document.getElementById('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entra)
a.addEventListener('mouseout',sair)

function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'lightcoral'
}

function entra(){
    a.innerText = 'Entro!'
}

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'lightblue'
}