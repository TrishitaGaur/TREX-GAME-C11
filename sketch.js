var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() 
{
 trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
 trex_collided = loadImage("trex_collided.png");

 groundImage = loadImage("ground2.png")
}

function setup() 
{
 createCanvas(600, 200);

 //create a trex sprite 
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;

 //create a ground sprite
 ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width /2;
 ground.velocityX = -4;

 //invisible ground sprite
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
}

function draw() 
{
 background(220);

  //jump when the space button is pressed
 if (keyDown("space"))
 {
  trex.velocityY = -10;
 }

 //gravity to trex
  trex.velocityY = trex.velocityY + 0.8;

  //infinite scrolling ground
  if (ground.x < 0) 
  { 
   ground.x = ground.width / 2;
  }
 
  //trex collides to the ground  
  trex.collide(invisibleGround);

  drawSprites();
}
