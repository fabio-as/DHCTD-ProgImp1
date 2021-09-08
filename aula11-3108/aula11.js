/*      GRUPO 4 = LUCAS BERNARDO, JOEL, RONAN, FABIO, GABRIEL BERNARDO
        AULA11 - MESA TRABALHO

    Cada participante tem 5 notas, dos quais suas pontuações individuais serão formadas, os participantes 
com suas respectivas pontuações são:
    Participante A:  5, 8, 4, 9, 5
    Participante B:  8, 7, 8, 6, 8
    Participante C:  7, 5, 10, 8, 3
    O concurso consiste em 2 modalidades de seleção para um vencedor:
Melhor média (a maior pontuação média entre os concorrentes)
Maior e-tip(a maior pontuação entre as 5 notas de cada participante)
    Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:
Determine qual seria a maneira ideal de representar cada participante com suas pontuações.
    Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e 
devolver a pontuação média dele.
    Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e 
devolver a pontuação mais alta que o participante tem.
    Logo nosso líder tecnológico nos pede para criar essas duas funções geramos uma nova funcionalidade 
chamada competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas 
anteriormente para calcular as médias e pontuações mais altas de cada uma, e deve anunciar 
(mostrar pelo console) o vencedor de cada modalidade de pontuação.
*/

const A = [5, 8, 4, 9, 5];
const B = [8, 7, 8, 6, 8];
const C = [7, 5, 10, 8, 3];

function media(array) {
    let soma = 0;
    let posicao = 0;
    let A1 = array;
    let comprimento = A1.length;
    for (let i = 1; i <= comprimento; i++) {
        soma = soma + A1[posicao]
        posicao++
    }
    return soma / comprimento
}

let melhorMedia = [(media(A)), (media(B)), (media(C))];

if (melhorMedia[0] > melhorMedia[1] && melhorMedia[0] > melhorMedia[2]) {
    console.log(`O Participante A possui a melhor média no valor de ` + (melhorMedia[0]));
}

else if (melhorMedia[1] > melhorMedia[0] && melhorMedia[1] > melhorMedia[2]) {
    console.log(`O Participante B possui a melhor média no valor de ` + (melhorMedia[1]));
}

else if (melhorMedia[2] > melhorMedia[0] && melhorMedia[2] > melhorMedia[1]) {
    console.log(`O Participante C possui a melhor média no valor de ` + (melhorMedia[2]));
}
else {
    console.log(`Necessário conferir critério de pontuação e desempate para a média!`);
}


function compararNumeros(a, b) {
    return a - b;
}

function maior(array) {
    let arrayOrdenado = array.sort();
    let arrayDecrescente = arrayOrdenado.sort(compararNumeros).reverse();
    return arrayDecrescente[0]
}

let maiorNota = [(maior(A)), (maior(B)), (maior(C))];

if (maiorNota[0] > maiorNota[1] && maiorNota[0] > maiorNota[2]) {
    console.log(`O Participante A possui a maior nota no valor de ` + (maiorNota[0]));
}

else if (maiorNota[1] > maiorNota[0] && maiorNota[1] > maiorNota[2]) {
    console.log(`O Participante B possui a maior nota no valor de ` + (maiorNota[1]));
}

else if (maiorNota[2] > maiorNota[0] && maiorNota[2] > maiorNota[1]) {
    console.log(`O Participante C possui a maior nota no valor de ` + (maiorNota[2]));
}
else {
    console.log(`Necessário conferir critério de pontuação e desempate para a nota!`);
}