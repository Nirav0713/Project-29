var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var slingshot;

function setup() {
  createCanvas(800,400);

  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);

  block6 = new Block(330,235,30,40);
  block7 = new Block(330,235,30,40);
  block8 = new Block(330,235,30,40);

  block9 = new Block(390,235,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw() {
  background(255,255,255);  

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  slingshot.display();

}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      this.polygon.trajectory = []
      Matter.Body.setPosition(this.polygon,{x: 100, y: 200});
      slingshot.attach(this.polygon);
  }
}