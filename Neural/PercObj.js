
function Perceptron(numWeights){
	var weights = [];
	this.randomWeights = function(){
		for(var i = 0; i < numWeights; i++){
			weights.push(random(-1,1));
			console.log(weights[i]);
		}


	}

	this.guess = function(inputs){
		var sum = 0;
		for(var i = 0; i < weights.length; i++)
			sum+= inputs[i] * weights[i];
			//activation function is a function of the sign of the sum
			var output = sum >= 0 ? 1 : -1;
			return output;
	}

	this.train = function(inputs, label){
		var currentGuess = this.guess(inputs);
		var error = label - currentGuess;

		for(var i = 0; i < weights.length; i++){
			//0.1 is learning rate
			weights[i] += error * inputs[i] * 0.1;

		}



	}


}
