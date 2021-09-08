//Crie a função imprimirInverso que pega um Array como um argumento e 
//imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
//Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
/*
function inverterArray(){
    let semana = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    let semanaInvertida = [semana[6], semana[5], semana[4],semana[3],semana[2],semana[1],semana[0]]
    return console.log(semanaInvertida)
}

inverterArray()

console.log("-------")

function somarArray(){
    let num = [15, 30, 49, 45]
    let soma = num[0]+num[1]+num[2]+num[3]
    return soma
}

console.log(somarArray())
/*
Simulação Array.join()
Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.
Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".*/


function join(){
    let a = ["o", "l", "a"]
   let semEspaco = `${a[0]}`+`${a[1]}`+`${a[2]}`
   return semEspaco
}

console.log(join())