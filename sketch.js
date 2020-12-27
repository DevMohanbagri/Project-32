const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var score = 0;

function preload(){
polyImg = loadImage("polygon.png");

}


function setup(){
var canvas = createCanvas(1300,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(650,780,1300,20);



//polygon
var options={
    density:1.2,
    restitution:0,
    friction:1
}
polygon = Bodies.circle(200,200,20,options);
World.add(world,polygon);

slingshot = new Slingshot(this.polygon,{x:200, y:200});

//1st pyramid
stand1 = new Ground(600,700,300,20);

//4th layer
block1 = new Box(480,660,40,60);
block2 = new Box(520,660,40,60);
block3 = new Box(560,660,40,60);
block4 = new Box(600,660,40,60);
block5 = new Box(640,660,40,60);
block6 = new Box(680,660,40,60);
block7 = new Box(720,660,40,60);

//3rd layer
block8 = new Box(520,600,40,60);
block9 = new Box(560,600,40,60);
block10 = new Box(600,600,40,60);
block11 = new Box(640,600,40,60);
block12 = new Box(680,600,40,60);

//2nd layer
block13 = new Box(560,540,40,60);
block14 = new Box(600,540,40,60);
block15 = new Box(640,540,40,60);

//1st layer
block16 = new Box(600,480,40,60);

//2nd pyramid
stand2 = new Ground(1100,500,250,20);

//3rd layer
block17 = new Box(1020,460,40,60);
block18 = new Box(1060,460,40,60);
block19 = new Box(1100,460,40,60);
block20 = new Box(1140,460,40,60);
block21 = new Box(1180,460,40,60);

//2nd layer
block22 = new Box(1060,400,40,60);
block23 = new Box(1100,400,40,60);
block24 = new Box(1140,400,40,60);

//1st layer
block25 = new Box(1100,360,40,60);


Engine.run(engine);
}

function draw(){
background("lightblue");
Engine.update(engine);

ground.display();
stand1.display();
slingshot.display();

imageMode(CENTER);
image(polyImg,polygon.position.x,polygon.position.y,50,50);

// score
textSize(25);

text("SCORE :" +score , 1000,50);


//1st pyramid
//4 layer
fill("lightgreen");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block1.scorecalculation();
block2.scorecalculation();
block3.scorecalculation();
block4.scorecalculation();
block5.scorecalculation();
block6.scorecalculation();
block7.scorecalculation();

//3 layer
fill("lightpink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block8.scorecalculation();
block9.scorecalculation();
block10.scorecalculation();
block11.scorecalculation();
block12.scorecalculation();

//2 layer
fill("yellow");
block13.display();
block14.display();
block15.display();

block13.scorecalculation();
block14.scorecalculation();
block15.scorecalculation();

//1 layer
fill("grey");
block16.display();

block16.scorecalculation();

//2nd pyramid
stand2.display();

//3rd layer
fill("orange");
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block17.scorecalculation();
block18.scorecalculation();
block19.scorecalculation();
block20.scorecalculation();
block21.scorecalculation();


//2nd layer
fill("white");
block22.display();
block23.display();
block24.display();

block22.scorecalculation();
block23.scorecalculation();
block24.scorecalculation();

//1st layer
fill("seagreen");
block25.display();

block25.scorecalculation();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}