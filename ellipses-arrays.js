var x = [];
var y = [];
var d = [];

function setup(){
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 50; i++){
    noStroke();
    x[i] = random(400);
    y[i] = random(150, 250);
    d[i] = random(40);
    //green/yellow/blue
    color[i] = color(random(60, 200), random(180, 200), random(180, 200));
  }
}
//draw circles
function draw(){
  background(255);
  for (var i = 0; i < 50; i++){
    fill(color[i]);
    ellipse(x[i], y[i], d[i]);
  if (random() < 100){
    d[i] = random(10, 100);
  }
  }
}
