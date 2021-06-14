let canvas = document.getElementById('cobra');
let context = canvas.getContext("2d");
let box = 32; //tamanho do quadrado
let cobra = [];
cobra[0] = { // tamanho
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen"; //cor
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o espaço do jogo
}

function criarCobra(){
    for(i=0; i< cobra.length; i++){
        context.fillStyle = "green"; //cor da cobra
        context.fillRect(cobra[i].x, cobra[i].y, box, box); //tamanho da cobra
    }
}

criarBG();
criarCobra();