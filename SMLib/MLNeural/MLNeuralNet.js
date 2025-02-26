class NeuralNet{
	constructor(numInputs, numHidden, numOutputs){
		this.numInputs = numInputs;
		this.numHiddenNodes = numHidden;
		this.numOutputs = numOutputs;

		this.weights = new Array(2);
		this.weights[0] = math.matrix();
		this.weights[0].resize([this.numHiddenNodes, this.numInputs]);
		this.weights[1] = math.matrix();
		this.weights[1].resize([this.numOutputs, this.numHiddenNodes]);
		this.randomizeWeights();


		this.bias = new Array(this.weights.length);
		this.bias[0] = math.matrix();
		this.bias[0].resize([this.numHiddenNodes, 1]);
		this.bias[0] = math.squeeze(this.bias[0]);
		this.bias[1] = math.matrix();
		this.bias[1].resize([this.numOutputs, 1]);
		this.bias[1] = math.squeeze(this.bias[1]);


	}

	sigmoid(input){
		for(let k = 0; k < input.size()[0]; k++){
			for(let j = 0; j < input.size()[1]; j++){
				let curVal = input.get([k,j]);
				input.subset(math.index(k,j), 1 / (math.pow(math.e, -curVal) + 1));
			}
		}
	}

	randomizeWeights(){
		for(let i = 0; i < this.weights.length; i++)
		for(let k = 0; k < this.weights[i].size()[0]; k++)
		for(let j = 0; j < this.weights[i].size()[1]; j++)
			this.weights[i].subset(math.index(k,j), random(-1,1));
	}

	feedforward(input){

		//hidden layer sum
		let hiddenLayer = math.matrix(math.multiply(this.weights[0], input));
		math.add(hiddenLayer, this.bias[0]);
		this.sigmoid(hiddenLayer);

		//output layer
		let outputLayer = math.matrix(math.multiply(this.weights[1], hiddenLayer));
		math.add(outputLayer, this.bias[1]);
		this.sigmoid(outputLayer);

		return outputLayer.toArray();

	}


	train(inputs, labels){

		let outputs = this.feedforward(inputs);
		outputs = math.matrix(outputs);
		let outputErrors = math.subtract(labels, outputs);

		let hiddenErrors = math.transpose(this.weights[1]);
		hiddenErrors = math.multiply(hiddenErrors, outputErrors);

		//TODO; gradients for back prop

	}










}
