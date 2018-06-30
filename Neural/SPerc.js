var data = [];



var weights = [];

var points = new Array(50);
function setup(){
  createCanvas(800,800);
	randomWeights();

	var inputs = [-1, 0.5];
	var g = guess(inputs);
	randomPoints();
}

function getRndInteger(min, max) {
    return Math.floor(random(min, max)) + min;
}


function randomPoints(){
	for(var i = 0; i < points.length; i++){
		var rx = random(0, width);
		var ry = random(0, height);
		points[i] = [rx, ry, 0];
		points[i][2] = points[i][1] > points[i][0] ? 1 : 0;
		console.log(points[i][0] + ", " + points[i][1] + ", " + points[i][2])
	}

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

function draw(){
    background(0);
    for(var i = 0; i < points.length; i++){
      if(points[i][2] == 0) stroke(255,0,0);
			else stroke(0,255,0);

      fill(0);
      ellipse(points[i][0], points[i][1], 8,8);

    }



}
