var p1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p1 = new Particle(20, 30);
}

function draw() {
  background(120);

  p1.update();
  p1.display();
}