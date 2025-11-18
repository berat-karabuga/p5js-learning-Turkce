let x, y;
function setup() {
  createCanvas(400, 400);
  x = width / 2; 
  y = height / 2; 
}
function draw() {
  x += random(-5, 5); 
  y += random(-5, 5); 
  ellipse(x, y, 50, 50);
}