var data = [];



var weights = [];

function setup(){
  createCanvas(800,800);
	randomWeights();

	var inputs = [-1, 0.5];
	var g = guess(inputs);
	console.log(g);
}



function randomWeights(){
	for(var i = 0; i < 2; i++)
		weights.push(random(-1,1));

}

function guess(inputs){
	var sum = 0;
	for(var i = 0; i < weights.length; i++)
		sum+= inputs[i] * weights[i];
		//activation function is a function of the sign of the sum
		var output = sum >= 0 ? 1 : -1;
		return output;
}

function mousePressed(){
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);

  var point = createVector(x,y);
  data.push(point);

}

function draw(){
    background(44);
    for(var i = 0; i < data.length; i++){
      var x = map(data[i].x, 0, 1, 0, width);
      var y = map(data[i].y, 0, 1, height, 0);
      fill(255);
      stroke(255);
      ellipse(x, y, 8,8);

    }



}
