var ground;
var safe,safe1,safe2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-32, width,80);
	groundSprite.shapeColor=color(102,204,0)

	safe=createSprite(1100 , 640, 320,25);
	safe.shapeColor=color("black");

	safe1=createSprite(945,578,25,150);
	safe1.shapeColor=color("black");

	safe2=createSprite(1270,578,25,150);
	safe2.shapeColor=color("black");

	paperBall = new Paper(400,50,40)


	
	
	Engine.run(engine);
  
}


function draw() {
  
  background(3,220,255);
  rectMode(CENTER);

  
  drawSprites();
  paperBall.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}
}





