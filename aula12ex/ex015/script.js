let data = new Date();
let ano = data.getFullYear();
let anoNascimento = document.getElementById("txtano");
let resultado = document.querySelector("div#res");
let imagem = document.getElementById("imagem");

function verificar() {
    if(anoNascimento.value.length === 0 || Number(anoNascimento.value) > ano) {
        alert("ERRO: Dados inválidos!");
    } else {
        let sexo = document.getElementsByName("radsex");
        let idade = ano - Number(anoNascimento.value);
        let genero = "";
        if(sexo[0].checked) {
            genero = "Homem";
            if(idade >= 0 && idade < 10) {
                imagem.src = "./imagens/homem-bebe.jpg";
            } else if(idade < 21) {
                imagem.src = "./imagens/homem-jovem.jpg";
            } else if(idade < 50) {
                imagem.src = "./imagens/homem-adulto.jpg";
            } else {
                imagem.src = "./imagens/homem-idoso.jpg";
            }
        } else {
            genero = "Mulher";
            if(idade >= 0 && idade < 10) {
                imagem.src = "./imagens/mulher-bebe.jpg";
            } else if(idade < 21) {
                imagem.src = "./imagens/mulher-jovem.jpg";
            } else if(idade < 50) {
                imagem.src = "./imagens/mulher-adulta.jpg";
            } else {
                imagem.src = "./imagens/mulher-idosa.jpg";
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
}