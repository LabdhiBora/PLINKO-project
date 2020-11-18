const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division,division2;
var spwanParticles;
var particles =[];
var plinkos=[];

function setup() {
  createCanvas(480,600);
  
  
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(80,height,800,20);

  division=new Division(160,490,10,200);
  division2=new Division(280,490,10,200);
  division3=new Division(50,490,10,200);
  division4=new Division(390,490,10,200);
 
  for(var j =40;j<=width; j=j+50){
     plinkos.push(new Plinko(j,75,10))
  }
  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  
  for(var j =40;j<=width; j=j+50){
    plinkos.push(new Plinko(j,275,10))
 }
  // for (var a=0;a<10;a=a+1){
  //   var plinko = createSprite(60*a+50,80,15,15);
  //   plinko.shapeColor="white";
    
  //   }

  //   for (var b=0;b<10;b=b+1){
  //     var plinko2 = createSprite(60*b+50,150,15,15);
  //     plinko2.shapeColor="white";
  //   }
  //   for (var c=0;c<10;c=c+1){
  //     var plinko3 = createSprite(60*c+50,220,15,15);
  //     plinko3.shapeColor="white";
  //   }
  //   for (var d=0;d<10;d=d+1){
  //     var plinko4 = createSprite(60*d+50,300,15,15);
  //     plinko4.shapeColor="white";
  //   }
  //   var spwanParticles=createGroup()
  //   if (World.frameCount%300===0){
  //     var particles=createSprite(40,20,20,320);
      
  //     // //var r =randomNumber(50,300);
  //     // obstacle.setAnimation("wing_bot_1");
  //     // obstacle.scale=0.5;
  //     // obstacle.y=randomNumber(40,350);
  //     // obstacle.velocityX=-(10+Score/100);
  //     particles.lifetime=40;
  //     spwanParticles.add(particles);
  //   }
}

function draw() {
  background(0);  
  Engine.update(engine);
  drawSprites();
  ground.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();

  for (var j=0;j<plinkos.length;j++){
    plinkos[j].display()
  }
  if (frameCount%10===0){
   var x=random(50,width-50)
    particles.push(new Particles(x,-25,10))
  }
  for (var j=0;j<particles.length;j++){
    particles[j].display()
  }
}
