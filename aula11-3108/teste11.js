let melhorMedia = [7.4, 6.2, 6.2];

if (melhorMedia[0] > melhorMedia[1] && melhorMedia[0] > melhorMedia[2]) {
    console.log(`O Participante A possui a maior média no valor de ` + (melhorMedia[0]));
}

else if (melhorMedia[1] > melhorMedia[0] && melhorMedia[1] > melhorMedia[2]) {
    console.log(`O Participante B possui a maior média no valor de ` + (melhorMedia[1]));
}

else if (melhorMedia[2] > melhorMedia[0] && melhorMedia[2] > melhorMedia[1]) {
    console.log(`O Participante C possui a maior média no valor de ` + (melhorMedia[2]));
}
else {
    console.log(`Necessário conferir critério de pontuação e desempate!`);
}