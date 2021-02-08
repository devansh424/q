class Hero{
	constructor(x,y,width,height){	
		var options={
			 isStatic:false,
			 density :1,
             frictionAir :0.1,
		}
        this.image = loadImage("sprites/superhero.png");
		this.body=Bodies.rectangle(x, y, width, height, options);
		this.width=width;
		this.height=height;
		World.add(world, this.body);
	}

	display(){
		var Pos=this.body.position;	
		push();
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.width, this.height)
		pop()
 }
}