function CalcularImc(peso, altura) {
    return `O valor do seu IMC é ${(peso/(altura*altura))}`
}
console.log(CalcularImc(70, 1.8))