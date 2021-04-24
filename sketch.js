function setup() {
  createCanvas(800,400);
  movingrect= createSprite(400, 200, 50, 50); 
  fixedrect=createSprite(200,200,70,30)
movingrect.shapeColor="blue";
fixedrect.shapeColor="blue"

}

function draw() {
  background(0);
movingrect.x=mouseX
movingrect.y=mouseY
console.log(movingrect.x-fixedrect.x)
if (isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red"

}
   else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue" 
   } 
  drawSprites();
}




