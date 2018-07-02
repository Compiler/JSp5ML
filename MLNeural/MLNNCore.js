var net;



function setup(){

	net = new NeuralNet(3,3,1);
	net.randomizeWeights();
	net.feedforward([1,2,3]);

}


function draw(){


}
