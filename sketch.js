



function preload(){
 //load your images here 
 bgImg= loadImage("background0.png");
 blueImg=loadImage("blue_balloon0.png")
 redImg=loadImage("red_balloon0.png")
 pinkImg=loadImage("pink_balloon0.png")
 greenImg=loadImage("green_balloon0.png")
  bowImg=loadImage("bow0.png")
}

function setup() {
  createCanvas(600, 600);
  bgSprite=createSprite(width/2, height/2)
  bgSprite.addImage(bgImg);
  bgSprite.scale=3;
  bgSprite.velocityX=-2
  //add code here
  redB();
blueB();
pinkB();
greenB();

//bow sprite
bow=createSprite(width-50, height/2)
bow.addImage(bowImg)
bow.scale=1.3
}

function draw() {
  background(0);
drawSprites();
bow.y=mouseY;

if(bgSprite.x<0)
  bgSprite.x=bgSprite.width/2;
  //add code here
  
}
function pinkB()
{
  for(var i=60; i<600; i+=80)
  {
  pinkBal=createSprite(70, i);
  pinkBal.addImage(pinkImg);
  pinkBal.scale=1.3
  }
}
function redB()
{
  for(var i=100; i<550; i+=80)
  {
    redBal=createSprite(140, i);
    redBal.addImage(redImg);
    redBal.scale=0.1;
  }
  
}
function blueB()
{
  for(var i=140; i<500; i+=80)
  {
  blueBal=createSprite(210, i);
  blueBal.addImage(blueImg);
  blueBal.scale=0.1
  }
}
function greenB()
{
  for(var i=180; i<500; i+=80)
  {
  greenBal=createSprite(280, i);
  greenBal.addImage(greenImg);
  greenBal.scale=0.08
  }
}
