//abaixo de 16 = não vota
//de 16 a 18 = voto opcional
//acima de 18 = voto obrigatório
//acima de 65 = voto opcional

let idade = Number(prompt("Qual a sua idade?"));

if(idade < 16) {
    alert("Você não vota.");
} else if(idade < 18 || idade > 65) {
    alert("O voto é opcional.");
} else {
    alert("O voto é obrigatório!");
}