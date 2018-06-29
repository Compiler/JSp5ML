var data = [];
var slope = 1;
var yint = 0;



function setup(){
  createCanvas(400,400);



}


function gradientDescent(){
  var learningRate = 0.1;
  for(var i = 0; i < data.length; i++){

    var x = data[i].x;
    var y = data[i].y;

    var guess = slope*x+yint
    var error = y- guess;

    slope = slope + (error * x) * learningRate;
    yint = yint + error * learningRate;

  }

}



function drawLine(){

  var xmin = 0;
  var ymin = slope * xmin + yint;
  xmin = map(xmin, 0, 1, 0, width);
  ymin = map(ymin, 0, 1, height, 0);

  var xmax = 1;
  var ymax = slope * xmax + yint;
  xmax = map(xmax, 0, 1, 0, width);
  ymax = map(ymax, 0, 1, height, 0);


  stroke(255, 0, 255);
  line(xmin, ymin, xmax, ymax);





}

function mousePressed(){
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);

  var point = createVector(x,y);
  data.push(point);

}




function draw(){
    background(51);
    for(var i = 0; i < data.length; i++){
      var x = map(data[i].x, 0, 1, 0, width);
      var y = map(data[i].y, 0, 1, height, 0);
      fill(255);
      stroke(255);
      ellipse(x, y, 8,8);

    }

    if(data.length > 1){
      gradientDescent();
      drawLine();

    }





}
