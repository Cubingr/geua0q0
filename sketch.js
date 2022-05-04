var obstacles, obstacle1, obstacle2, obstacle3, obstacle4, obstaclesgr
var cube,cubeImg
var ground,groundImg
var obstacles
var surfaces 
var bkground
function preload(){
cubeImg = loadImage("cube.png")
groundImg = loadImage("background.png")
obstacle1 = loadImage("spike.png")
obstacle2 = loadImage("spike3.png")
obstacle3 = loadImage("saw.png")
obstacle4 = loadImage("Monster.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight)
 bkground=createSprite(200,200)
 bkground.addImage(groundImg)
 bkground.x=bkground.width/2
 bkground.scale=5
 bkground.velocityX=-3
    cube = createSprite(width/17,height/2.1,50,50)
    cube.x=500
    cube.addImage(cubeImg)
    cube.scale=0.2
    ground = createSprite(50,500,10000,10)
    console.log(ground.x)
obstaclesgr = new Group()
}

function draw() {
 background(0)
 if(bkground.x<0){
     bkground.x=bkground.width/2
 }
 drawSprites()
 if(keyDown("space")&&cube.y>=100){console.log(cube.y)
    cube.velocityY=-10
cube.rotate+=10
 }
 camera.position.x=cube.x
 camera.position.y=cube.y
 cube.velocityY+=0.8
 if(obstaclesgr.isTouching(cube)){
     text("GAME OVER",150,150)
     cube.velocityX=0
     cube.velocityY=0
 }
 cube.collide(ground)
 shapeObstacles()

}
function shapeObstacles(){
if(frameCount%60===0){;
    var obstacle=createSprite(width/1.5,height/1.9,50,50)
    obstacle.velocityX=-6

var rand=Math.round(random(1,4))
switch(rand){
    case 1:obstacle.addImage(obstacle1);
    break;
    case 2:obstacle.addImage(obstacle2);
    break;
    case 3:obstacle.addImage(obstacle3);
    obstacle.scale=0.3
    break;
    case 4:obstacle.addImage(obstacle4);
    obstacle.scale=0.3
    break;
    default:break;
}
obstaclesgr.add
}
}
