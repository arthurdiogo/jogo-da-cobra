let canvas = document.getElementById('cobra');
let context = canvas.getContext("2d");
let box = 32; //tamanho do quadrado

function criarBG(){
    context.fillStyle = "lightgreen"; //cor
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o espaço do jogo
}

criarBG();