var net;
var inputNodes, hiddenNodes, outputNodes;

var offsets = new Array(3);

function setup(){
	createCanvas(1080,800);
	inputNodes = 3; hiddenNodes = 7; outputNodes = 1;
	net = new NeuralNet(inputNodes, hiddenNodes,outputNodes);
	net.feedforward([1,2,3]);
	offsets[0] = (2 * (height/3)) / inputNodes;
	offsets[1] = (height/3) / hiddenNodes;
	offsets[2] = (height/3) / outputNodes;
}

let sz = 30;
function draw(){
	background(0);
	stroke(255);
	fill(0);

	for(let i = 0; i < inputNodes; i++)
		ellipse(200,  (height / 6) + (i * offsets[0]), 50, 50);



}
