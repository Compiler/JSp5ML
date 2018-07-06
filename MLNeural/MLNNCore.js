var net;
var inputNodes, hiddenNodes, outputNodes;

var offsets = new Array(3);
function setup(){
	createCanvas(1080,800);
	inputNodes = 3; hiddenNodes = 7; outputNodes = 1;
	net = new NeuralNet(inputNodes, hiddenNodes,outputNodes);
	net.feedforward([1,2,3]);
	offsets[0] = (2 * (height/3)) / inputNodes;
	offsets[1] = (height) / hiddenNodes;
	offsets[2] = (height/3) / outputNodes;
	this.points = new Array(3);
	this.points[0] = new Array(inputNodes);
	this.points[1] = new Array(hiddenNodes);
	this.points[2] = new Array(outputNodes);

	for(let i = 0; i < inputNodes; i++)
		this.points[0][i] = new Point(200, (height / inputNodes) + (i * offsets[0]) - sz, sz);

	for(let i = 0; i < hiddenNodes; i++)
		this.points[1][i] = new Point(550, (height - sz ) - (i * offsets[1]) - sz, sz);
}

let sz = 30;
function draw(){
	background(0);
	stroke(255);
	fill(0);

	for(let i = 0; i < 2; i++)
		for(let k = 0; k < this.points[i].length; k++){
			this.points[i][k].draw();
		}
	for(let i = 0; i < 3; i++)
		for(let k = 0; k < hiddenNodes; k++){
			line(this.points[0][i].getX() + sz / 2,this.points[0][i].getY(),this.points[1][k].getX() - sz / 2,this.points[1][k].getY());
		}


}
