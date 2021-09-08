function podeSubir(altura, pessoa){
    
    let h = altura

    if((h >= 1.40) && (h <= 2.00)){
        return console.log("Acesso autorizado");
    } 
    else if ((h >= 1.20) && (h < 1.40)){
        if (pessoa = "sim"){
            return console.log("Acesso autorizado com acompanhante"); 
        } else {
            return console.log("Acesso não autorizado");
        }
    }

console.log(podeSubir(1.10,"sim"));
}