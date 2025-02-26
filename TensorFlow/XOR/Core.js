

let model = tf.sequential();
let hiddenLayer = tf.layers.dense({
	units: 4,
	inputShape: 2,
	activation: 'sigmoid'
});
let outputLayer = tf.layers.dense({
	units: 1,
	activation: 'sigmoid'
});

model.add(hiddenLayer);
model.add(outputLayer);

//stochastic gradient descent with learning rate of 0.1 using mean squared as error
model.compile({
	optimizer: tf.train.sgd(0.1),
	loss: tf.losses.meanSquaredError
});

const count = 10000;
const trainIterations = 10;


let input = new Array(count);
let label = new Array(count)
for(let i = 0; i < count; i++){
	input[i] =[Math.random() > 0.5 ? 1 : 0, Math.random() > 0.5 ? 1 : 0];
	label[i] = [input[i][0] == input[i][1] ? 1 : 0];
}

const inputs = tf.tensor2d(input);
const labels = tf.tensor2d(label);
const test = tf.tensor2d([[1,1], [0,0],[1,0], [0,1]]);

train().then(()=>{
	console.log('Training complete!');
	let results = model.predict(test);
	results.print();
});

async function train(){
	for(let i = 0; i < trainIterations; i++){
			var response = await model.fit(inputs, labels, {shuffle: true, epochs: 5});
			console.log(response.history.loss[0]);
		}
}
