class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
		
		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var positBottom=this.bottomBody.position;
			var positLeft=this.leftWallBody.position;
			var positRight=this.rightWallBody.position;

			

			push();
			translate(positLeft.x, positLeft.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			rotate(this.angle);
			pop();

			push();
			translate(positRight.x, positRight.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			rotate(-1*this.angle);
			pop();

			push();
			translate(positBottom.x, positBottom.y+10);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
			pop();
	}

}