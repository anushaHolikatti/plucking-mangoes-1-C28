
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;

var mango1,mango2,mango3,mango4,mango5,mango6;

var world,boy;

var stone;

var string;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango();
	mango3=new mango(1200,100,30);
	mango4=new mango(1300,100,30);
	mango5=new mango(1100,200,30);
	mango6=new mango(1100,300,30);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

	stone1 = new Stone (200,340,20,30);

	string = new Elastic(boy,stone.body);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone1.display();

  string.display();

  groundObject.display();
}

function mouseDragged (){

	Matter.Body.setPosition(boy,{x:mouseX , y:mouseY});
	
	}
	
	function mouseReleased (){
	
		stone.fly();
	
	}
