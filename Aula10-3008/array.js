console.log("Mostrando os itens do Array");
let compras = ["palito", "balde", "camisa", "arroz"];
console.log(compras);

console.log("Método join modifica a exibição dos itens do Array separando os mesmos com o parâmetro informado");
let comprasJoin = compras.join(" - ");
console.log(comprasJoin);

console.log("Método pop elimina o último elemento de um Array, aqui mostrando qual é ele e abaixo como ficou o Array")
let comprasPop = compras.pop();
console.log(comprasPop);
console.log(compras);

console.log("Método push adiciona um elemento no final de um Array, aqui mostrando a nova qtde de elementos e abaixo como ficou o Array")
let comprasPush = compras.push("liquidificador");
console.log(comprasPush);
console.log(compras);

console.log("Método shift elimina o primeiro elemento de um Array, aqui mostrando qual é ele e abaixo como ficou o Array")
let comprasShift = compras.shift("pneu");
console.log(comprasShift);
console.log(compras);

console.log("Método unshift adiciona um elemento no início de um Array, aqui mostrando a nova qtde de elementos e abaixo como ficou o Array")
let comprasUnShift = compras.unshift("chocolate");
console.log(comprasUnShift);
console.log(compras);