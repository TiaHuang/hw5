var x = []
var y = []
var r = []
var s = []


function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 101; i++) {
    x[i] = random(200, 210);
    y[i] = random(100, 300);
    r[i] = random(0, 100);
    s[i] = random(0, 3);
	}
}
  
function draw() {
  background(0);
  noStroke();
  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);
 
  // darker as it gets closer to 0
  for (var i = 0; i < 101; i++) {
  push();
  fill(y[i]);
  translate(x[i], y[i]);
  rotate(r[i]);
  //swirl
  rect(10, 10, 20, 20);
  pop();
  
  // up 3 pixels
  y[i] -= s[i];
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[i] += 0.05
  
  // if reach past the top a bunch
  if (y[i] < -150) {
    y[i] = 290;
  }
  }
}
