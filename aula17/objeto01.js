let amigo = {
    nome: "Gustavo",
    sexo: "M",
    peso: 71,
    engordar: function(peso) {
        return this.peso + peso;
    }
};

console.log(amigo.engordar(2));