let canvas = document.getElementById('cobra');
let context = canvas.getContext("2d");
let box = 32; //tamanho do quadrado
let cobra = [];
cobra[0] = { // tamanho
    x: 8 * box,
    y: 8 * box
}
let direcao = "direita";

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

function iniciarJogo(){
    criarBG();
    criarCobra();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direcao == "direita") cobraX += box; //direção direita
    if(direcao == "esquerda") cobraX -= box; // direção esquerda
    if(direcao == "cima") cobraY -= box; //direção cima
    if(direcao == "baixo") cobraY += box; //direção baixo

    cobra.pop(); //retira o ultimo elemento da função

    let cabeca = { //cabeça da cobra
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(cabeca); //adciona um 
}

let jogo = setInterval(iniciarJogo, 100); //determinando um intervalo em milisegundos para a função ser renovada