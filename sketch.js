const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var backgroundImg,platform;
var bird, slingshot;
var superhero;
var monsterImg2;
var monsterImg1;
var gameState="onSling";

function preload() {
    backgroundImg=loadImage("sprites/GamingBackground.png");
    monsterImg2=loadImage("sprites/monster-02.png");
    monsterImg1=loadImage("sprites/monster-01.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,height,800,20);

    superhero=new Hero(200,350,200,150);

    monster = new Monster(1010,150,100,100);

    box1 = new Box(500,500,50,50);
    box2 = new Box(500,450,50,50);
    box3 = new Box(500,400,50,50);
    box4 = new Box(500,350,50,50);
    box5 = new Box(500,300,50,50);
    box6 = new Box(500,250,50,50);
    box7 = new Box(500,200,50,50);
    box8 = new Box(500,150,50,50);

    box9 = new Box(600,400,50,50);
    box10 = new Box(600,350,50,50);
    box11 = new Box(600,350,50,50);
    box12 = new Box(600,350,50,50);
    box13 = new Box(600,350,50,50);

    box14 = new Box(700,500,50,50);
    box15 = new Box(700,450,50,50);
    box16 = new Box(700,400,50,50);
    box17 = new Box(700,350,50,50);
    box18 = new Box(700,300,50,50);
    box19 = new Box(700,250,50,50);
    box20 = new Box(700,200,50,50);

    box21 = new Box(400,500,50,50);
    box22 = new Box(400,450,50,50);
    box23 = new Box(400,400,50,50);
    box24 = new Box(400,350,50,50);
    box25 = new Box(400,300,50,50);

    fly = new Rope(superhero.body,{x:200, y:300});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();    
    superhero.display();
    monster.display();
    fly.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();    
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    monsterDied(box20,monster);
}

function mouseDragged(){
    if(gameState!=="launched"){
      Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
    }
}

function monsterDied(box20,monster){
    if(box20.body.speed>10) {
       gameState="launched";
       Matter.Body.setStatic(monster.body,false);
    }
}