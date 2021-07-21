var seaImg,sea;
var shipImg,ship;
function preload() {
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 
}

function setup() {
createCanvas(200,200);
sea=createSprite(400,200);
sea.addImage(seaImg);
sea.velocityX=-5;
sea.scale=0.5;
ship=createSprite(130,200,30,30);
ship.addAnimation("movingship",shipImg);
ship.scale=0.5;
}

function draw() {
    background("blue");
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}