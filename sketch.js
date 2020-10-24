const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
 world = engine.world;

 //Blocks 20 spaces awaay from start

 platform1 = new Platform(600,370,250,10)
 block1 = new Blocks(370,300,30,40)


}

function draw() {
  background("brown");  
  Engine.update(engine);

  platform1.display();
  block1.display();

  

  drawSprites();
}