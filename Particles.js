class Particles {
    constructor(x,y,r){
        var options={
            restitution:0.4,
        }
    

     this.r=r;

      this.body=Bodies.circle (x,y,this.r,options);
      this.color=color("green"),("red"),("yellow");
      World.add(world,this.body);

      if(frameCount%60===0){
        Particles.push(new Particles (random(width/2-10,width/2+10,),10,10));
      }
}
display(){

    var pos=this.body.position;
    var angle=this.body.angle;

    push ()
    translate(pos.x,pos.y);
    var particles=[j];
    for (var j=0;j<Particles.length;j=j+1){
        particles[j].display();
      }
    rotate(angle);
    fill (this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop ();

}
}