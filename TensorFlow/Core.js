

let model = tf.sequential();
let hiddenLayer = tf.layers.dense({
	units: 4,
	inputShape: 2,
	activation: 'sigmoid'
});
let outputLayer = tf.layers.dense({
	units: 2,
	activation: 'sigmoid'
});

model.add(hiddenLayer);
model.add(outputLayer);

//stochastic gradient descent with learning rate of 0.1
let opt = tf.train.sgd(0.1);
let config = {
	optimizer: opt,
	loss: 'meanSquaredError'
}

model.compile(config);
