const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, smallcube,cube, rectangle;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    cube = new Cube(600,300);
    rectangle = new Rect(400,300);
    smallcube = new smallCube(800,300);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    cube.display();
    rectangle.display();
    smallcube.display();

    
 
}