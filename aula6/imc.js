function calculoimc(peso,altura){

let imc = peso/(altura*altura);

let classificação ="";

if (imc < 18.5){
classificacao = "abaixo do peso";
} 
else if (imc >= 18.5 & imc < 24.9){
classificacao = "peso ideal";
}
else if (imc >= 25 & imc < 29.9){
classificacao = "acima do peso";
}
else if (imc >= 29.9 & imc < 32.5){
classificacao = "muito acima do peso"
}
else if (imc >= 32.5 & imc < 39.9){
    classificacao ="obesidade1"
}
else if (imc >= 40){
classificacao ="obesidade2"
}
return classificacao
}
console.log(calculoimc(65,1.65))

/*do imc fiz assim
mas teve gente que fez mais fácil
fez só com três variáveis*/
