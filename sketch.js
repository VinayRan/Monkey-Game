
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivaleTime=0;

var survivalTime=0;
var background1, backgroundImage;

function preload(){                                            
  
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  backgroundImage = loadImage("jungle-path-game-background-vector-20736275.jpg")

  
 
}



function setup() {
  createCanvas(1000, 1000);
  
  background1 = createSprite(0, 0, 800, 800);
  background1.x = background1.width/2;
  background1.addImage(backgroundImage);
  background1.velocityX = -6;
  
  monkey=createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  
  
  
  
  
  
}


function draw() {
 
  if(background1.x < 0){
    background1.x = background1.width/2;
     
     }
  
  if(keyDown("space")){
    monkey.velocityY=-12
  
    }
  
  
 
  monkey.velocityY = monkey.velocityY+0.8;
 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + survivalTime, 100, 50);
  
  drawSprites()
  spawnBanana();
  spawnObstacle();
  
}


function spawnBanana(){
  if (frameCount % 80 === 0){
  var banana=createSprite(300, 200, 20, 20);
  banana.y = Math.round(random(120, 200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX = -3;
  banana.lifetime=400;
  bananaGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount % 300 === 0){
     var obstacle=createSprite(400, 380, 20, 20);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.5;
    obstacle.velocityX = -6;
    obstacle.lifetime=400;
    obstacleGroup.add(obstacle);
     }
}

