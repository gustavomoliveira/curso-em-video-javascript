let num = document.getElementById("numero");
let lista = document.getElementById("lista");
let res = document.getElementById("res");
let listaNumero = [];

function validaNumero() {//valida condição do valor digitado no campo num
    if(Number(num.value) < 1 || Number(num.value) > 100 || num.value == "") {
        return false;
    } else {
        return true;
    }
}

function validaLista(n, l) {//valida se o numero adicionado a lista é válido
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
   if(validaNumero() && !validaLista(num.value, listaNumero)) { //apenas se o numero for válido e não estiver na lista
    listaNumero.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
   } else {
    alert("Valor inválido ou já adicionado na lista!");
   }
   num.value = "";
   num.focus(); //volta o cursor para o campo de digitação
}

function finalizar() {
    res.innerHTML = `Ao todo, temos ${listaNumero.length} números cadastrados.<br>`;
    res.innerHTML += `O maior valor informado foi ${Math.max(...listaNumero)}.<br>`;
    res.innerHTML += `O menor valor informado foi ${Math.min(...listaNumero)}.<br>`;
    
    let soma = 0; //soma todos os valores em um array usando for loop
    for(let i = 0; i < listaNumero.length; i++) {
        soma += listaNumero[i];
    }
    res.innerHTML += `Somando todos os valores temos ${soma}.<br>`;
    
    let media = soma / listaNumero.length; //traz a média dos valores em um array
    res.innerHTML += `A média dos valores digitados é ${media}.`;
}

