
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, particale;
var particales = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(240, 790, 480, 20);

	for(var a = 0; a <= width; a = a + 80){
		divisions.push(new Divisions(a, height - divisionHeight/2, 10, divisionHeight));
	}
	for(var c = 15; c <= width - 10; c = c + 50){
		plinkos.push(new Plinko(c, 75, 10));
	}	
	for(var d = 15; d <= width - 10; d = d + 50){
		plinkos.push(new Plinko(d, 175, 10));
	}	
	for(var e = 15; e <= width - 10; e = e + 50){
		plinkos.push(new Plinko(e, 275, 10));
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  for(var b = 0; b < divisions.length; b++){
	divisions[b].display;
  }  
  for(var f = 0; f < plinkos.length; f++){
	divisions[f].display;
  } 

  if(frameCount % 60 === 0){
	particales.push(new Plinko(random(width/2 - 10, width/2 + 10), 275, 10));
  }

  for(var g = 0; g < plinkos.length; g++){
	particales[g].display;
  }

  drawSprites();
 
}



