var data = [];



var weights = [];

var points = new Array(100);
function setup(){
  createCanvas(800,800);
	randomWeights();
	randomPoints();
}




function randomPoints(){
	for(var i = 0; i < points.length; i++){
		var rx = random(0, width);
		var ry = random(0, height);
		points[i] = [rx, ry, 0];
		points[i][2] = points[i][1] > points[i][0] ? 1 : -1;
	}

}

function randomWeights(){
	for(var i = 0; i < 2; i++){
		weights.push(random(-1,1));
		console.log(weights[i]);
	}


}

function guess(inputs){
	var sum = 0;
	for(var i = 0; i < weights.length; i++)
		sum+= inputs[i] * weights[i];
		//activation function is a function of the sign of the sum
		var output = sum >= 0 ? 1 : -1;
		return output;
}

function train(inputs, label){
	var currentGuess = guess(inputs);
	var error = label - currentGuess;

	for(var i = 0; i < weights.length; i++){
		//0.1 is learning rate
		weights[i] += error * inputs[i] * 0.1;

	}



}

function mousePressed(){
	console.log("oh");
	for(var i = 0; i < points.length; i++){
		train([points[i][0], points[i][1]], points[i][2]);



	}

}

function draw(){
    background(0);
		stroke(255);
		line(0, 0,width, height);
    for(var i = 0; i < points.length; i++){
      if(points[i][2] == -1) fill(255);
			else fill(0);

      stroke(255);
      ellipse(points[i][0], points[i][1], 6,6);

			var nxt = guess(points[i]);
			//console.log("guess/label " + nxt + " | " + points[i][2]);
			if(nxt == points[i][2])fill(0,255,0);
			else if(nxt == points[i][2] * -1) fill(255,0,0);
			else fill(0,0,255);
			ellipse(points[i][0], points[i][1], 8,8);

    }








}
