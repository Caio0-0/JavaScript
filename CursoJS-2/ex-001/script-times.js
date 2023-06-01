
function ativarContagem(){
    //document.getElementById("tempo").innerHTML = "Começou a contar";
    //tempo = setTimeout(function(){
        //document.getElementById("tempo").innerHTML = "executou o setTimeout";
    //},5000);
    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) +1;
        document.getElementById("tempo").innerHTML = soma;
    },1000);
}
function paraContagem(){
    //clearTimeout(tempo);
    //document.getElementById("tempo").innerHTML = "Parou a Contagem";
    clearInterval(tempo);
}