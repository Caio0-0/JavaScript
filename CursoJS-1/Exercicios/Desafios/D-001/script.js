function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("img")
    var corp = window.document.getElementById("corp")
    var data = new Date
    var hora = 14
    //var hora = data.getHours()
    msg.innerHTML = `A gora são ${hora} horas`
    if (hora >=0 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        corp.style.background = '#e4e26d'

    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/fototarde.png'
        corp.style.background = '#ffc894'
    }else{
        img.src = 'imagens/fotonoite.png'
        corp.style.background = '#7562b9'
    }
}

