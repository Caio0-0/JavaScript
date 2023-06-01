function contar(){
    var inicio = window.document.getElementById("iInicio")
    var fim = window.document.getElementById("iFim")
    var passo = window.document.getElementById("iPasso")
    var res = window.document.getElementById("res")
    
    if(inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Falta um campo")
    }else{
        res.innerHTML = "Contando:"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (i < f){
            for(var c = i;c<=f; c+=p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }else {
            for(var c=i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{27A1}`
            }

        }
        res.innerHTML +='Fim'
        
    }

    
}