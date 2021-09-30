let estudantes = require("./alunos");
let estudos = require("./curso");

let alunoT1 = new estudantes.AddAluno("Natasha", 10, [1, 10, 8]);
let alunoT2 = new estudantes.AddAluno("Joe", 3, [6, 7.5, 6]);
let alunoT3 = new estudantes.AddAluno("Wilbert", 4, [8, 7, 9]);
let alunoT4 = new estudantes.AddAluno("Yan", 4, [5, 7, 7]);
let alunoT5 = new estudantes.AddAluno("Lucile", 1, [8, 7, 8]);

console.log(alunoT1);
console.log(alunoT1.calcularMedia());
console.log(alunoT1.calcularFaltas());


let listaEstudantes = [alunoT1, alunoT2, alunoT3, alunoT4, alunoT5];

module.exports = listaEstudantes;