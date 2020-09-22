var mRect,fRect;

function setup() {
  createCanvas(800,400);
  mRect=createSprite(400,200,50,50)
  fRect=createSprite(600,300,50,50)
  mRect.shapeColor="blue"
  fRect.shapeColor="blue"
  
}

function draw() {
  background(255,255,255);  
  mRect.x=mouseX;
  mRect.y=World.mouseY
  if(mRect.x-fRect.x<fRect.width/2+mRect.width/2 && fRect.x-mRect.x<fRect.width/2+mRect.width/2
    &&mRect.y-fRect.y<fRect.height/2+mRect.height/2 &&fRect.y-mRect.y<fRect.height/2+mRect.height/2){
    mRect.shapeColor="red"
    fRect.shapeColor="purple"
  }
  else {
    mRect.shapeColor="blue"
    fRect.shapeColor="blue"
  }
  drawSprites();
}