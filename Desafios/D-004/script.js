function calcu(){
    var numero = document.getElementById("txtN")
    var res = document.getElementById("res")
    if(numero.value.length == 0){
        window.alert("Campo obrigatorio")
    }else{
        var n = Number(numero.value)
        r = 0
        res.innerHTML = ""
        for(var c = 1;c <=10;c +=1 ){
            r = c * n
            res.innerHTML += `<p>${c} x ${n} = ${r}</p>`
        }
    }
}