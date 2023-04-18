function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("iano")
    var res = document.getElementById("res")
    if (fano.value.lengh == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamento")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement("img")
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','imagens/foto-bebe-m.png')
            }else if (idade < 21){
                img.setAttribute('src','imagens/foto-jovem-m.png')
            }else if (idade < 50){
                img.setAttribute('src','imagens/foto-adulto-m.png')
            }else{
                img.setAttribute('src','imagens/foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','imagens/foto-bebe-f.png')
            }else if (idade < 21){
                img.setAttribute('src','imagens/foto-jovem-f.png')
            }else if (idade < 50){
                img.setAttribute('src','imagens/foto-adulto-f.png')
            }else{
                img.setAttribute('src','imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}