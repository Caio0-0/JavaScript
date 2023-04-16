var ago = new Date()
var h = ago.getHours()
console.log(`Agora são ${h} horas`)
if (h < 12){
    console.log('Bom dia')
}else if (h <= 18){
    console.log('Boa Tarde')
}else {
    console.log("Boa Noite")
}