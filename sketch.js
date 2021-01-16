const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, engine,world
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12




function setup() {
  createCanvas(800,400);
  engine=Engine.create ()   
  world=engine.world

    ground= new Ground(width/2,height-10,width,10)
    b1=new Box(350,350,100,50)
    b2=new Box(350,320,100,50)
    b3=new Box(350,250,100,50)
    b4=new Box(350,220,100,50)
    b5=new Box(350,150,100,50)
    b6=new Box(350,120,100,50)
    b7=new Box(350,70,100,50)
    b8=new Box(520,30,100,50)
    b9=new Box(520,300,100,50)
    b10=new Box(520,320,100,50)
    b11=new Box(520,250,100,50)
    b12=new Box(520,200,100,50)
  
    bob=new Bob(50,200,40)
    slingshot=new Slingshot(bob.body,{x:200,y:200})





}

function draw() {
  background("lightblue");  
Engine.update(engine)

ground.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
bob.display()
slingshot.display()


}


function mouseDragged(){

  Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
}
