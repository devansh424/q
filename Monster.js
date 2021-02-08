class Monster{
	constructor(x,y,r){	
		var options={
			isStatic:true,
			restitution :0,
      friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image1 = loadImage("sprites/monster-01.png");
		this.image2 = loadImage("sprites/monster-02.png");
		this.body=Bodies.circle(x, y, this.r, options);
		World.add(world, this.body);
	}

	display(){
		if(this.body.speed<1){
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image1,0,0,this.r*2, this.r*2)
		pop()
		}else{
			var Pos=this.body.position;	
			push()
			translate(Pos.x, Pos.y);
			rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(CENTER);
			image(this.image2,0,0,this.r*2, this.r*2)
			pop()
		}
    }
}