var movingRect,car;


function setup() {
  createCanvas(1200,400);
  wall=createSprite(1000,200,30,80);
  wall.shapeColor="green";
 
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
}  
  
function draw() {
  background("lightblue");  
  movingRect.velocityX=10;
  console.log(movingRect.x-wall.x);
  if(movingRect.collide(wall))
  {
    movingRect.shapeColor="red";
  }
  drawSprites();
}