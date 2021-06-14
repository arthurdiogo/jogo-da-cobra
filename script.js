let canvas = document.getElementById('cobra');
let context = canvas.getContext("2d");
let box = 32; //tamanho do quadrado
let cobra = [];
cobra[0] = { // tamanho
    x: 8 * box,
    y: 8 * box
}
let direcao = "direita";
let lugarComida = { //mudando a comida de posição
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

function comida(){
    context.fillStyle = "red";
    context.fillRect(lugarComida.x, lugarComida.y, box, box);
}

document.addEventListener('keydown', update); //reconhece eventos do teclado

function update (event){
    if(event.keyCode == 37 && direcao != "direita") (direcao = "esquerda");
    if(event.keyCode == 38 && direcao != "baixo") (direcao = "cima");
    if(event.keyCode == 39 && direcao != "esquerda") (direcao = "direita");
    if(event.keyCode == 40 && direcao != "cima") (direcao = "baixo");

}

function iniciarJogo(){ //para cobra voltar para a tela quando chegar no final
    if(cobra[0].x > 16 * box && direcao == "direita") cobra[0].x = 0;
    if(cobra[0].x < 0 && direcao == "esquerda") cobra[0].x = 16 * box;
    if(cobra[0].y > 16 * box && direcao == "baixo") cobra[0].y = 0;
    if(cobra[0].y < 0 && direcao == "cima") cobra[0].y = 16 * box;

    criarBG();
    criarCobra();
    comida()

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direcao == "direita") cobraX += box; //direção direita
    if(direcao == "esquerda") cobraX -= box; // direção esquerda
    if(direcao == "cima") cobraY -= box; //direção cima
    if(direcao == "baixo") cobraY += box; //direção baixo

    if(cobraX != lugarComida.x || cobraY != lugarComida.y){
        cobra.pop(); //retira o ultimo elemento da função
    }
    else{
        lugarComida.x = Math.floor(Math.random() * 15 + 1) * box;
        lugarComida.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    let cabeca = { //cabeça da cobra
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(cabeca); //adciona um 
}

let jogo = setInterval(iniciarJogo, 100); //determinando um intervalo em milisegundos para a função ser renovada