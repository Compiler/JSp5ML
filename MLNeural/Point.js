

class Point{


	constructor(x, y, dim){
		this.x = x;
		this.y = y;
		this.dim = dim;
	}


	draw(){
		ellipse(this.x, this.y, this.dim, this.dim);
	}

	getX(){return this.x;}
	getY(){return this.y;}



}
