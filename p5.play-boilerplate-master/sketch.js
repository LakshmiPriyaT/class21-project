
var random;



function setup() {
  createCanvas(1600,400);
  bullet= createSprite(800, 800, 500,500);
  bullet.shapeColor = "white";
  bullet.debug = true;
  wall= createSprite(1600, 400, 500,1400);
  wall.debug = true;
}

function draw() {
  background(0,0,0);
  
 var random = Math.bullet.speed(Math.random() * 52)+ 30;
 var random = Math.bullet.weight(Math.random() * 321)+ 223;
 var random = Math.wall.thickness(Math.random() * 83)+ 22;
 
  drawSprites();
}