//definir o horário e realizar saudação.

let horaAtual = new Date();
let hora = horaAtual.getHours();

alert(`Agora são exatamente ${hora} horas.`);
if(hora >= 6 && hora < 12) {
    alert("Bom dia!");
} else if(hora <= 18) {
    alert("Boa tarde!");
} else if(hora <= 24) {
    alert("Boa noite!");
} else {
    alert("Boa madrugada!");
}
