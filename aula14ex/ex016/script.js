function contar() {
    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("passo");
    let res = document.getElementById("res");

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("ERRO: Insira um número em cada campo!");
        res.innerHTML = "";
    } else {
        res.innerHTML = "Contando: <br>"
        let ini = Number(inicio.value);
        let fi = Number(fim.value);
        let pas = Number(passo.value);

        //contagem progressiva
        if(pas > 0 && fi > ini) {
            for(let c = ini; c <= fi; c += pas) {
                res.innerHTML += `${c} \u{27A1} `;
            }
            res.innerHTML += ` \u{1F3C1}`
        //contagem regressiva
        } else if(pas > 0 && fi < ini) {
            for(let c = ini; c >= fi; c -= pas) {
                res.innerHTML += `${c} \u{27A1} `;
            }
            res.innerHTML += ` \u{1F3C1}`
        } else {
            alert("ERRO: Valor de passo inválido!");
        }
    }
}