/*let altura = 1.50
let acompanhado = " "

function podeSubir(altura, acompanhado){
    if ((altura >= 1.40 && altura <= 2.00) {
        podeSubir = true
        console.log("Acesso Autorizado")
    }
    
    else if(){

        podeSubir = 
        console.log("Acesso negado")
    }
}*/
function podeSubir(altura, vemAcompanhado){
    let podeSubir = false
    if(altura <= 2.0 && altura >= 1.20){
    podeSubir = true
    }
    if(altura <= 1.20 && vemAcompanhado){
    podeSubir = true
    }
    return podeSubir
    }
