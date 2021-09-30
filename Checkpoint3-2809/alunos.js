function AddAluno(nome_, faltas_, notas_) {
    this.nome = nome_;
    this.faltas = faltas_;
    this.notas = notas_;
    this.calcularMedia = () => {
        let media = this.notas.reduce((previousValue, currentValue) => previousValue + currentValue) / this.notas.length;
        return media;        
    };
    this.calcularFaltas = () => this.faltas += 1;    
}

module.exports = {
    AddAluno: AddAluno
};
