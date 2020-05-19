var ninja,Ninja,Ninja2,leftWall,Wall,RightWall,rightWall
var obstaclesGroup
var speedPower
var shieldPower

function preload(){
  Ninja=loadImage("ninja.png")
  Ninja2=loadImage("ninja2.png")
Wall=loadImage("walle.png")
}



function setup() {
  createCanvas(400,1000);
  ninja=createSprite(200,900,20,20)
  leftWall=createSprite(50,600,40,1000)
  rightWall=createSprite(350,600,40,1000)
  ninja.addImage(Ninja)
  leftWall.addImage(Wall)
  rightWall.addImage(Wall)
  }
  



function draw() {
  background(0);  
  
  drawSprites();
}