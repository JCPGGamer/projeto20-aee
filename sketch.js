
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,rec,rec2,plane;
function preload()
{
	
}

function setup() {
	createCanvas(500, 300);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
  var plane_options = {
	isStatic : true
  }

  var op1 = {
    restitution : 0.5,
    friction : 0.02,
    frictionAir : 0
  }

  var op2 = {
    restitution : 0.7,
    friction : 0.01,
    frictionAir : 0.1
  }

  var op3 = {
    restitution : 0.01,
    friction : 1,
    frictionAir : 0.3
  }

	Engine.run(engine);

  plane = Bodies.rectangle(250,301,500,1,plane_options)
  World.add(world,plane);
  
  ball = Bodies.circle(220,10,10,op1)
  World.add(world,ball)

  rec = Bodies.rectangle(110,50,10,10,op2)
  World.add(world,rec)

  rec2 = Bodies.rectangle(350,50,10,10,op3)
  World.add(world,rec2)
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);
  
  drawSprites();
  rect(plane.position.x,plane.position.y,500,1)
  ellipse(ball.position.x,ball.position.y,10)
  rect(rec.position.x,rec.position.y,10,10)
  rect(rec2.position.x,rec2.position.y,10,10)
}



