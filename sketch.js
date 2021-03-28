var wall,thickness,t;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(windowWidth,windowHeight);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  t=thickness;

  bullet=createSprite(windowWidth/2-600, height/2, 70, 20);
  bullet.shapeColor="white";

  wall=createSprite(windowWidth/2+600,height/2,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("black");  

  bullet.velocityX=speed;

  if(wall.x-bullet.x < bullet.width/2+wall.width/2 && bullet.x-wall.x < bullet.width/2+wall.width/2){  

    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(t*t*t);

    if(damage>10) {
      bullet.shapeColor="green";
    }

    if(damage<10){
      bullet.shapeColor="red";
    }

  }

  drawSprites();
}   