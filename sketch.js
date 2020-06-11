var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bird, cloud, bg;
var bird_img;
var score = 0;

function preload(){
  bird_img = loadImage("Bird.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(800,400);
  bird = createSprite(200,200,20,20);
  bird.addImage("bird", bird_img);
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}