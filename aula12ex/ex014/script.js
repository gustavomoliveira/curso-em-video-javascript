function carregar() {
    let msg = document.getElementById("msg");
    let imagem = document.getElementById("imagem");
    let data = new Date();
    let horaDoDia = data.getHours();

    msg.innerHTML = `Agora são <strong>${horaDoDia}</strong> horas`;

    if(horaDoDia >= 6 && horaDoDia < 12) {
        imagem.src = "./imagens/manha.jpeg";
        document.body.style.background = "#C67656";
    } else if(horaDoDia >= 12 && horaDoDia <= 18) {
        imagem.src = "./imagens/tarde.jpeg";
        document.body.style.background = "#FE880C";
    } else {
        imagem.src = "./imagens/noite.jpeg";
        document.body.style.background = "#002B57";
    }
}

