var x = 230;
var y1 = 220;
var y2 = 220;
var y3 = 220;
velocity1 = random(5, 10);
velocity2 = random(15, 20);
velocity3 = random(20, 25);

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  // draw drip
	fill(255);
  ellipse(x, y1, 10);
  y1 = y1 + velocity1;
	print('ellipse1');
	fill(100);
	ellipse(x, y2, 10);
  y2 = y2 + velocity2;
	print('ellipse2');
  ellipse(x, y3, 10);
  y3 = y3 + velocity3;
	print('ellipse3');

  if (y1 > height*2) {
    // reset
    y = 220;
  }

