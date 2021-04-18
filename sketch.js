
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crp, ground, container;

function setup() {
	createCanvas(600, 500);

	engine = Engine.create();
	world = engine.world;

	crp = new Paper(100,50,45,45)
	ground = new Floor(10)
	container = new Dustbin(480,400,140,170)
	
}


function draw() {
  background(220);

  Engine.update(engine);

  crp.display();
  ground.display();
  container.display();

  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crp.body, crp.body.position, {x:6,y:-8})
	}
}

