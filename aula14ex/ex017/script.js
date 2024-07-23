function tabuada() {
    let inputNum = document.getElementById("numero");
    let numero = Number(inputNum.value);
    let lista = document.getElementById("selectab");
    
    if(numero == "") {
        alert("Insira um valor.");
    } else {
        //limpa o campo antes do loop
        lista.innerHTML = "";
         for(let i = 1; i <= 10; i++) {
            let calculo = numero * i;
            let opt = document.createElement("option");
            //importante para linguagens como php; nem tanto para js
            opt.value = i;
            opt.innerHTML = `${numero} X ${i} = ${calculo}`;
            lista.appendChild(opt);
        }
    }
}
