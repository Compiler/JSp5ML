var net;
var inputNodes, hiddenNodes, outputNodes;

var offsets = new Array(3);
function setup(){
	createCanvas(1080,800);
	inputNodes = 4; hiddenNodes = 7; outputNodes = 2;
	let input = new Array(inputNodes);
	for(let m = 0; m < inputNodes; m++) input[m] = random();
	net = new NeuralNet(inputNodes, hiddenNodes,outputNodes);
	net.feedforward(input);
	net.train(input, input);




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

	for(let i = 0; i < outputNodes; i++)
		this.points[2][i] = new Point(850, (height / outputNodes) + (i * offsets[2]) - sz * 3, sz);
}

let sz = 30;
function draw(){
	background(0);
	stroke(255);
	fill(0);


	for(let i = 0; i < inputNodes; i++)
		for(let k = 0; k < hiddenNodes; k++){
			line(this.points[0][i].getX(),this.points[0][i].getY(),this.points[1][k].getX(),this.points[1][k].getY());
		}

	for(let i = 0; i < hiddenNodes; i++)
		for(let k = 0; k < outputNodes; k++){
			line(this.points[1][i].getX(),this.points[1][i].getY(),this.points[2][k].getX(),this.points[2][k].getY());
		}

	for(let i = 0; i < 3; i++)
		for(let k = 0; k < this.points[i].length; k++){
			this.points[i][k].draw();
		}


}
