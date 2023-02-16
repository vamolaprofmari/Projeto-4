var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  green_balloonImage = loadImage("green_ballon0.png")
  // carregue a imagem do balão rosa
  pink_balloonImage = loadImage("pink_ballon0.png")
  // carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_ballon0.png")
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  var select_ballon = Math.round (ramdom(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1: red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage(red_balloonImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
    break;
    
    case 2: blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
    blue.addImage(red_balloonImage);
    blue.velocityX = 3;
    blue.scale = 0.1;
    blue.lifetime = 150;
    break;
    
    case 3: green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    green.addImage(red_balloonImage);
    green.velocityX = 3;
    green.scale = 0.1;
    green.lifetime = 150; 
    break;
    
    case 4: pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
    pink.addImage(red_balloonImage);
    pink.velocityX = 3;
    pink.scale = 0.1;
    pink.lifetime = 150;
    break;
    default:break;
  }}
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  //crieSprite para o balão
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  blue.addImage(red_balloonImage);
  // adicione velocidade para fazer o balão se mover
  blue.velocityX = 3;
  // mudar a dimensão do balão
  blue.scale = 0.1;
  // atriubua tempo de vida ao balão
  blue.lifetime = 150;
}

function greenBalloon() {
  //crieSprite para o balão
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  green.addImage(red_balloonImage);
  // adicione velocidade para fazer o balão se mover
  green.velocityX = 3;
  // mudar a dimensão do balão
  green.scale = 0.1;
  // atriubua tempo de vida ao balão
  green.lifetime = 150;
}

function pinkBalloon() {
 //crieSprite para o balão
 var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  pink.addImage(red_balloonImage);
  // adicione velocidade para fazer o balão se mover
  pink.velocityX = 3;
  // mudar a dimensão do balão
  pink.scale = 0.1;
  // atriubua tempo de vida ao balão
  pink.lifetime = 150;
}
